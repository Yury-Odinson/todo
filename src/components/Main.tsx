import React, {useRef, useState} from "react";
import {TaskElement} from "./TaskElement";
import {CirclePlus} from 'lucide-react';
import {useStoreTasks} from "../tools/store";
import {Task} from "../tools/types";

export const Main: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [filtered, setFiltered] = useState<"All" | "Active" | "Completed">("All");

    const tasks = useStoreTasks((state) => state.items);
    const addTask = useStoreTasks((state) => state.addTask);
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

    const filteredTasks = tasks.filter((task: Task) => {
        if (filtered === "Active") return !task.completed;
        if (filtered === "Completed") return task.completed;
        return true;
    });

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[700px]
            shadow-2xl bg-white">

            <div>
                <h1 className="text-6xl font-light text-blue-200">todos</h1>
            </div>

            <div className="py-10 px-5">
                <div className="mb-10 shadow-xl">
                    <label className="flex items-center gap-4 p-2 ">
                        <CirclePlus className="cursor-pointer" onClick={handlerAddTask}/>
                        <input
                            ref={inputRef}
                            className="flex-1 p-2 focus:outline-none focus:ring focus:border-blue-200"
                            placeholder="What needs to be done?"
                        />
                    </label>
                </div>
                <div className="my-2 flex flex-col gap-2">
                    {filteredTasks?.map((task: Task) => (
                        <TaskElement task={task.task} completed={task.completed} id={task.id} key={task.id}/>
                    ))}
                </div>
            </div>

            <div className="px-5 pb-10 flex gap-5 flex-wrap items-center justify-between">
                <span className="w-24 text-left">
                    {remainingTasksCount <= 0 ? "" : remainingTasksCount + " items left"}
                </span>

                <div className="flex flex-1 gap-6 ">
                    <button className={filtered === "All" ? "font-bold " : "font-light text-gray-400"}
                            onClick={() => setFiltered("All")}>All
                    </button>
                    <button className={filtered === "Active" ? "font-bold" : "font-light text-gray-400"}
                            onClick={() => setFiltered("Active")}>Active
                    </button>
                    <button className={filtered === "Completed" ? "font-bold" : "font-light text-gray-400"}
                            onClick={() => setFiltered("Completed")}>Completed
                    </button>
                </div>

                <button className="text-md" onClick={removeTasks}>Clear Completed</button>
            </div>

        </div>
    );
};
