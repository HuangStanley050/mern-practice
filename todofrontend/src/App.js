import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from "./container/todolist";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
      </div>
    );
  }
}

export default App;
