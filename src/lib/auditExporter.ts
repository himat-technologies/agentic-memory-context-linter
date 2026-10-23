import type { AuditData } from '../types';
export function validateAudit(value:unknown): AuditData {
 if(!value || typeof value!=='object') throw new Error('The file must contain a JSON object.');
 const v=value as Record<string,unknown>;
 if(typeof v.systemPrompt!=='string'||!Array.isArray(v.turns)||!Array.isArray(v.memories)||typeof v.capacity!=='number') throw new Error('This JSON does not look like a supported audit: expected systemPrompt, turns, memories, and numeric capacity.');
 if(v.turns.some((t:any)=>!t||typeof t.id!=='string'||!['system','user','assistant','tool'].includes(t.role)||typeof t.content!=='string')) throw new Error('One or more conversation turns are invalid.');
 if(v.memories.some((m:any)=>!m||typeof m.id!=='string'||typeof m.key!=='string'||typeof m.value!=='string')) throw new Error('One or more memory entries are invalid.');
 return {version:1,systemPrompt:v.systemPrompt,turns:v.turns as AuditData['turns'],memories:v.memories as AuditData['memories'],capacity:v.capacity,decaySensitivity:typeof v.decaySensitivity==='number'?v.decaySensitivity:0.5,scenarioId:typeof v.scenarioId==='string'?v.scenarioId:undefined};
}
export function downloadText(filename:string, content:string, type='text/plain') { const blob=new Blob([content],{type}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url); }
