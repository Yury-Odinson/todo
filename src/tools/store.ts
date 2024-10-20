import {create} from 'zustand'
import {Task} from "./types";

export const useStoreTasks: any = create((set) => ({
    items: [],
    addTask: (item: Task) => set((state: { items: Task[] }) => ({items: [...state.items, item]})),
    updateTask: (id: string, updatedTask: Partial<Task>) =>
        set((state: { items: Task[] }) => ({
            items: state.items.map((task) =>
                task.id === id ? {...task, ...updatedTask} : task
            ),
        })),
    removeTasks: () => set({items: []}),
}));
