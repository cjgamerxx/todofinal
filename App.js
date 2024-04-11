import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to handle adding a task
  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to handle updating a task
  const handleUpdateTask = (index) => {
    const updatedTask = prompt('Enter updated task:');
    if (updatedTask !== null && updatedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div>
      <h1 className='header'>To-Do List</h1>
      <div className='inputdiv'>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button> 
      </div>
      <div>
        <h2 className='header'>Tasks:</h2>
        <ul style={{listStyle:"Number"}}>
          {tasks.map((task, index) => (

            <div  key={index} className='map'>
              <li >
              {task}
              
        
            </li>


           <div className=''>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
              <button onClick={() => handleUpdateTask(index)}>Update</button>
              </div>
            </div>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;