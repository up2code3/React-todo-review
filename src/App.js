import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {

  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([])
  return(
   <div>
    <h1>TODO LIST</h1>
    <TodoList todoList={todoList}/>
    <AddTodoForm onAddTodo={setNewTodo}/>
    <p>{newTodo}</p>
   </div> 
  )
}

export default App;
