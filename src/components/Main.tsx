import React from "react";
import {TaskElement} from "./TaskElement";

export const Main: React.FC = () => {

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-3/4 shadow-2xl bg-white rounded-3xl">
            <div>
                <h1 className="text-6xl">todos</h1>
            </div>
            <div className="py-10 px-5">
                <div className="pb-10">
                    <button className=""/>
                    <input className="" placeholder="What needs to be done?"/>
                </div>

                <div>
                    <TaskElement task={"task 1"} completed={true} id={"1"}/>
                    <TaskElement task={"some task"} completed={false} id={"2"}/>
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
