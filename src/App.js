import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    setTasks([...tasks, { text, isDone: false }]); // Store tasks as objects with text and isDone properties
    setText('');
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white rounded p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">TO DO LIST</h1>
        <div className="flex mb-4">
          <input
            className="flex-grow border-b-2 border-gray-300 px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
            placeholder="New task"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={addTask}
            disabled={!text.trim()}
          >
            + ADD TASK
          </button>
        </div>
        <div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className={`flex items-center justify-between border-b border-gray-300 py-2 `}>
               <button className={`text-red-500 px-2`} onClick={() => handleDone(index)}>
               {task.isDone ? '👍' : '👎'}                </button>
                <span className={`flex-grow  ${task.isDone ? 'line-through' : ''}`}>{task.text}</span>
                <button className="text-red-500" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
