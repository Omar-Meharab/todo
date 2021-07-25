import React from 'react';
import { ITask } from '../interfaces';

interface Props {
    task: ITask;
    completeTodo(taskNameToDelete: string): void;
}

const ToDoTask = ({ task, completeTodo }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.remainder}</span>
            </div>
            <button onClick={() => {
                completeTodo(task.taskName);
            }}>
                X
            </button>
        </div >
    );
};

export default ToDoTask;