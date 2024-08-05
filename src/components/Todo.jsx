import React from 'react';

export default function Todo({ todo, fetchTodos }) {
  const completedStyle = {
    fontStyle: 'italic',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const deleteTodo = async () => {
    await fetch(`http://localhost:5173/todos/${todo._id}`, {
      method: 'DELETE',
    });
    fetchTodos();
  };

  const completeTodo = async () => {
    await fetch(`http://localhost:5173/todos/${todo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  };

  return (
    <div className="todo-item">
      <div className="task">
        <input
          type="checkbox"
          onClick={completeTodo}
          checked={todo.completed}
        />
        <p style={todo.completed ? completedStyle : null}>{todo.task}</p>
      </div>
      <div className="buttons">
        <button className="del-btn" onClick={deleteTodo}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
