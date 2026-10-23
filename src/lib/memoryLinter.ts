import type { Finding, MemoryEntry, Turn } from '../types';
const norm = (s:string) => s.trim().toLowerCase();
export function lintMemory(memories: MemoryEntry[], turns: Turn[]): Finding[] {
  const findings: Finding[] = [];
  const groups = new Map<string, MemoryEntry[]>();
  memories.forEach(m => { if (!m.key.trim()) { findings.push({id:`empty-${m.id}`,severity:'warning',title:'Memory entry has no key',target:m.id,reason:'A keyless entry is difficult to retrieve or update deterministically.',fix:'Add a stable key or remove the unused entry.'}); return; } const k=norm(m.key); groups.set(k,[...(groups.get(k)??[]),m]); });
  for (const [key, items] of groups) if (items.length > 1) {
    const values = new Set(items.map(m=>norm(m.value)));
    findings.push({id:`duplicate-${key}`,severity:values.size>1?'error':'warning',title:values.size>1?'Conflicting memory values':'Repeated memory key',target:key,reason:values.size>1?`${items.length} entries share this key but contain different values.`:`${items.length} entries repeat this key with the same value. This may be intentional but adds redundant context.`,fix:values.size>1?'Choose an authoritative value and define a clear overwrite/source-precedence rule.':'Keep one canonical entry unless duplication is deliberate.',sources:items.map(m=>m.source||m.id)});
  }
  const keyPatterns = [/(?:plan|tier|subscription)\s*(?:is|:|=)\s*([\w -]+)/ig, /(?:status|account status)\s*(?:is|:|=)\s*([\w -]+)/ig];
  for (const pattern of keyPatterns) {
    const observed:string[]=[];
    turns.forEach((t,i)=>{ let m:RegExpExecArray|null; pattern.lastIndex=0; while((m=pattern.exec(t.content))!==null) observed.push(`${i+1}:${m[1].trim()}`); });
    if(new Set(observed.map(x=>norm(x.split(':').slice(1).join(':')))).size>1 && observed.length>1) findings.push({id:`turn-change-${pattern.source.slice(0,8)}`,severity:'warning',title:'Possible state change across turns',target:'Conversation history',reason:`A simple text heuristic found potentially different values: ${observed.join(', ')}. This is an inference, not a confirmed structured state update.`,fix:'Represent state changes as structured events and update the canonical memory explicitly.',sources:observed.map(x=>`turn ${x.split(':')[0]}`)});
  }
  memories.forEach(m=>{
    const sourceTurn = m.source?.match(/turn\s*(\d+)/i);
    const age = sourceTurn ? turns.length - Number(sourceTurn[1]) : 0;
    if (age >= 3 && /status|tier|subscription|account|plan|state/i.test(m.key)) findings.push({id:`stale-${m.id}`,severity:'warning',title:'Potentially stale state memory',target:m.key,reason:`This state-like entry points to turn ${sourceTurn?.[1]}, which is at least three turns behind the latest conversation turn. The value may still be valid; recency alone cannot confirm staleness.`,fix:'Verify the value against the latest authoritative event or tool result before using it for decisions.',sources:[m.source||`turn ${sourceTurn?.[1]}`]});
  });
  const seen = new Set<string>();
  memories.forEach(m=>{const v=norm(m.value); if(v.length>30 && seen.has(v)) findings.push({id:`redundant-${m.id}`,severity:'info',title:'Repeated memory content',target:m.key||m.id,reason:'This value duplicates content already present in another memory entry.',fix:'Deduplicate repeated chunks or store a reference to a single canonical fact.'}); seen.add(v);});
  const allText = turns.map(t=>norm(t.content));
  const dup = allText.findIndex((t,i)=>t.length>50 && allText.indexOf(t)!==i);
  if(dup>=0) findings.push({id:'repeated-turn-context',severity:'info',title:'Repeated conversation context',target:`Turn ${dup+1}`,reason:'At least one long message appears more than once in the conversation history.',fix:'Consider summarising repeated context or keeping a single canonical reference.',sources:[`turn ${dup+1}`]});
  return findings;
}
