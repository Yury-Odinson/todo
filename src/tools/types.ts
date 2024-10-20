export interface Task {
    task: string;
    completed: boolean;
    id: string;
}

export interface StoreTasks {
    items: Task[] | [];
    addTask: (item: Task) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void;
    removeTasks: () => void;
}
