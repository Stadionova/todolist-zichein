import React from "react";
import logo from "./logo.png";
import "./App.css";
import ToDoList from "./components/todo-list/ToDoList";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <ToDoList />
    </>
  );
}

export default App;