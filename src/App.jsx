import React from 'react';
import './App.css';
import Input from './components/Input'
import Todolist from './components/Todolist'

function App() {

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Input />
      <Todolist />
    </div>
  );
}

export default App;
