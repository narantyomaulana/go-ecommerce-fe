export type SortValue = 'asc' | 'desc' | null;

export interface SortConfig {
    key: string;
    direction: SortValue;
}