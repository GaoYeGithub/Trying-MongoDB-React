import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import Input from './Input';

export default function Todolist() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:5173/todos');
    const todos = await response.json();
    setTodoList(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-list">
      <Input fetchTodos={fetchTodos} />
      {!todoList.length ? (
        <div className="placeholder">Your Todos appear here...</div>
      ) : null}
      {todoList.map((todo, i) => (
        <Todo todo={todo} key={i} fetchTodos={fetchTodos} />
      ))}
    </div>
  );
}
