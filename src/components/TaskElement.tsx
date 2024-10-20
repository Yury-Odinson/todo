import React, {useState} from "react";
import {Task} from "../tools/types";
import {CircleCheckBig, Circle} from "lucide-react";

export const TaskElement: React.FC<Task> = ({task, completed, id}) => {

    const [isCompleted, setIsCompleted] = useState<boolean>(completed);

    const handlerCompleted = () => setIsCompleted(!isCompleted);

    return (
        <div className=" p-2 bg-blue-100" id={id}>
            <div className="flex gap-2 cursor-pointer" onClick={handlerCompleted}>
                {isCompleted ? <CircleCheckBig/> : <Circle/>}
                <p className={isCompleted ? "line-through text-gray-400" : ""}>{task}</p>
            </div>
        </div>
    );
};
