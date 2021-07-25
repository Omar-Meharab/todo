import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Task Name" />
        <input type="number" placeholder="Days Remaining" />
        <button>Add To Do</button>
      </div>
      <div className="todo">

      </div>
    </div>
  );
}

export default App;
