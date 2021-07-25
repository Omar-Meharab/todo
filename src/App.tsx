import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import ToDoTask from './Components/ToDoTask';
import { ITask } from './interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [remainder, setRemainder] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    }
    else {
      setRemainder(Number(event.target.value))
    }
  };

  const addTodo = (): void => {
    const newTodo = { taskName: task, remainder: remainder }
    setTodo([...todo, newTodo])
    setTask("");
    setRemainder(0);
  }

  const completeTodo = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete
    })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <input type="text" name="task" value={task} placeholder="Task Name" onChange={handleChange} />
          <input type="number" name="remainder"  placeholder="Days Remaining" onChange={handleChange} />
          <button onClick={addTodo}>Add To Do</button>
        </div>
      </div>
      <div className="todo">
        {todo.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} completeTodo={completeTodo} />;
        })}
      </div>
    </div>
  );
}

export default App;
