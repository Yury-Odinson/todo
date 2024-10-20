import React from "react";
import {Task} from "../tools/types";

export const TaskElement: React.FC<Task> = ({task, completed, id}) => {
    return (
        <div id={id}>
            <p>{task}</p>
            <span>
                {completed ? "compleated": "active"}
            </span>
        </div>
    );
};
