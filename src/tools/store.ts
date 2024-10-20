import {create} from 'zustand'
import {StoreTasks, Task} from "./types";

export const useStoreTasks = create<StoreTasks>((set) => ({
    items: [],
    addTask: (item: Task) => set((state: { items: Task[] }) => ({items: [...state.items, item]})),
    updateTask: (id: string, updatedTask: Partial<Task>) =>
        set((state: { items: Task[] }) => ({
            items: state.items.map((task) =>
                task.id === id ? {...task, ...updatedTask} : task
            ),
        })),
    removeTasks: () => set((state: { items: Task[] }) => ({
        items: state.items.filter((task) => !task.completed),
    })),
}));
