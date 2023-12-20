import './App.css';
import data from './data.json';
import Header from './Header';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todoList, setTodoList] = useState(data);
  return (
    <div className="App">
      <Header></Header>
      <ToDoList toDoList={todoList}></ToDoList>
    </div>
  );
}

export default App;
