import type { Turn } from '../types';
export function analyzeDecay(turns:Turn[], sensitivity:number) {
 const latest=turns.length-1;
 return turns.map((turn,i)=>{const distance=latest-i; const score=Math.round(100*Math.exp(-Math.max(.01,sensitivity)*distance/5)); const important=/\b(always|never|must|important|constraint|do not|don't|remember|requirement)\b/i.test(turn.content); return {id:turn.id,turn:i+1,role:turn.role,distance,score,important,content:turn.content};});
}
