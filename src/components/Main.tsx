import React, {useEffect, useRef} from "react";
import {TaskElement} from "./TaskElement";
import {CirclePlus} from 'lucide-react';
import {useStoreTasks} from "../tools/store";
import {Task} from "../tools/types";

export const Main: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const tasks = useStoreTasks((state: { items: Task; }) => state.items);
    const addTask = useStoreTasks((state: { addTask: () => void; }) => state.addTask);

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const idTask = (Math.floor(Math.random() * (100000 - 1)) + 1).toString();

    const handlerAddTask = () => {
        const input = inputRef.current?.value;
        if (input) {
            addTask({task: input, completed: false, id: idTask});
            inputRef.current.value = "";
        }
    };

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 shadow-2xl bg-white rounded-3xl">
            <div>
                <h1 className="text-6xl">todos</h1>
            </div>
            <div className="py-10 px-5">
                <div className="bg-blue-100">
                    <label className="flex items-center gap-2 p-2">
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
            <div className="px-10 py-5 flex gap-5 items-center">
                <span>
                    {/*{COUNTER}*/}
                </span>
                <button className="">All</button>
                <button className="">Active</button>
                <button className="">Completed</button>
                <button className="">Clear Completed</button>
            </div>
        </div>
    );
};
