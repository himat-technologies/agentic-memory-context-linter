import type { MemoryEntry, Turn } from '../types';
import { estimateTokens, estimateTurnTokens } from './tokenEstimator';
export function analyzeContext(prompt:string, turns:Turn[], memories:MemoryEntry[], capacity:number) {
 const system=estimateTokens(prompt), history=estimateTurnTokens(turns), memory=memories.reduce((s,m)=>s+estimateTokens(m.key)+estimateTokens(m.value)+estimateTokens(m.source??'')+3,0), total=system+history+memory;
 return {system,history,memory,total,capacity,usedPercent:capacity?total/capacity*100:0,remaining:capacity-total,exceeded:total>capacity};
}
