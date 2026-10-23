export type Role = 'system' | 'user' | 'assistant' | 'tool';
export type Severity = 'error' | 'warning' | 'info';
export interface Turn { id: string; role: Role; content: string; toolOutput?: string; timestamp?: string }
export interface MemoryEntry { id: string; key: string; value: string; source?: string; category?: string }
export interface Finding { id: string; severity: Severity; title: string; target: string; reason: string; fix: string; sources?: string[] }
export interface Scenario { id: string; name: string; description: string; systemPrompt: string; turns: Turn[]; memories: MemoryEntry[] }
export interface AuditData { version: number; exportedAt?: string; scenarioId?: string; systemPrompt: string; turns: Turn[]; memories: MemoryEntry[]; capacity: number; decaySensitivity: number }
