import React, { useState } from 'react';

export default function Input({ fetchTodos }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = async () => {
    const todo = {
      task,
      completed: false,
    };
    await fetch('http://localhost:5173/todos', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    setTask('');
    fetchTodos();
  };

  return (
    <div className="input">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a Todo..."
      />
      <button
        className="add-btn"
        onClick={handleClick}
        disabled={!task}
      >
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
        <span id="btn-text">Add Todo</span>
      </button>
    </div>
  );
}
