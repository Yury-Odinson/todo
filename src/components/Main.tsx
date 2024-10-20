import React, {useRef} from "react";
import {TaskElement} from "./TaskElement";
import {CirclePlus} from 'lucide-react';
import {useStoreTasks} from "../tools/store";
import {Task} from "../tools/types";

export const Main: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const tasks = useStoreTasks((state: { items: Task; }) => state.items);
    const addTask = useStoreTasks((state: { addTask: () => void; }) => state.addTask);
    const removeTasks = useStoreTasks((state: { removeTasks: () => void }) => state.removeTasks);

    const idTask = (Math.floor(Math.random() * (100000 - 1)) + 1).toString();

    const handlerAddTask = () => {
        const input = inputRef.current?.value;
        if (input) {
            addTask({task: input, completed: false, id: idTask});
            inputRef.current.value = "";
        }
    };

    const remainingTasksCount = tasks?.filter((task: Task) => !task.completed).length;

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 shadow-2xl bg-white rounded-3xl">
            <div>
                <h1 className="text-6xl font-light text-fuchsia-200">todos</h1>
            </div>
            <div className="py-10 px-5">
                <div className="mb-10 shadow-xl">
                    <label className="flex items-center gap-4 p-2">
                        <CirclePlus className="cursor-pointer" onClick={handlerAddTask}/>
                        <input
                            ref={inputRef}
                            className="flex-1 p-2" placeholder="What needs to be done?"
                        />
                    </label>
                </div>

                <div className="my-2 flex flex-col gap-2">
                    {tasks?.map((task: Task) => (
                        <TaskElement task={task.task} completed={task.completed} id={task.id} key={task.id}/>
                    ))}
                </div>
            </div>
            <div className="px-5 pb-10 flex gap-5 items-center justify-between">
                <span className="w-32 text-left">
                    {remainingTasksCount <= 0 ? "" : remainingTasksCount + " items left"}
                </span>
                <button className="">All</button>
                <button className="">Active</button>
                <button className="">Completed</button>
                <button className="" onClick={removeTasks}>Clear Completed</button>
            </div>
        </div>
    );
};
