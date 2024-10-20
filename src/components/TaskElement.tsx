import React, {useState} from "react";
import {Task} from "../tools/types";
import {CircleCheckBig, Circle} from "lucide-react";
import {useStoreTasks} from "../tools/store";

export const TaskElement: React.FC<Task> = ({task, completed, id}) => {

    const updateTask = useStoreTasks((state) => state.updateTask);

    const [isCompleted, setIsCompleted] = useState<boolean>(completed);

    const handlerCompleted = () => {
        const newCompletedState = !isCompleted;
        setIsCompleted(newCompletedState);
        updateTask(id, {completed: newCompletedState});
    };

    return (
        <div className={isCompleted ? "p-4" : "p-4 shadow-xl"} id={id}>
            <div className="flex gap-4 items-center cursor-pointer break-all" onClick={handlerCompleted}>
                <div>
                    {isCompleted ? <CircleCheckBig/> : <Circle/>}
                </div>
                <p className={isCompleted ? "line-through text-gray-400 " : ""}>{task}</p>
            </div>
        </div>
    );
};
