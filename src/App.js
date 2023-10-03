import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todolist';

function App() {

  return (
      <div className="App">
      <h1>Todolist</h1>

      <TodoList />
  </div>
  );

}

export default App;
