export enum PRIORITY {
    HIGH = 2,
    MEDIUM = 1,
    LOW = 0
}

export type TaskItem = {
    id: number | null
    title: string | null 
    description: string | null
    priority: PRIORITY | null
    isCompleted: boolean| null
}