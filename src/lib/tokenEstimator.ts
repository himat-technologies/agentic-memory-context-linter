/** Transparent rough estimate: whitespace-delimited words plus punctuation adjustments. Not model-tokenizer exact. */
export function estimateTokens(text: string): number {
  const s = text.trim();
  if (!s) return 0;
  const words = s.match(/[\p{L}\p{N}_]+|[^\s\p{L}\p{N}_]/gu) ?? [];
  return Math.max(1, Math.ceil(words.reduce((n, part) => n + (part.length > 8 ? part.length / 4 : 1), 0)));
}
export function estimateTurnTokens(turns: {role:string;content:string;toolOutput?:string}[]): number {
  return turns.reduce((sum, t) => sum + estimateTokens(t.content) + estimateTokens(t.toolOutput ?? '') + 4, 0);
}
