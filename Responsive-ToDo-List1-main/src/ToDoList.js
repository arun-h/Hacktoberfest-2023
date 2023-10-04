import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime(),
      text: e.target.item.value,
    };
    setItems([...items, newItem]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="item" name="item" placeholder="Add new item" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="text">{item.text}</div>
            <div className="actions">
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
