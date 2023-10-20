import React, { useState } from "react";
import "./ToDoList.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const task = event.target.elements.task.value;
    if (task) {
      setTasks([...tasks, task]);
      event.target.reset();
    }
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function handleSave(index) {
    const newTask = prompt("Enter a new task name:");
    if (newTask) {
      const newTasks = [...tasks];
      newTasks[index] = newTask;
      setTasks(newTasks);
    }
  }
  

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter a task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div className="actions">
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleSave(index)}>Save</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
