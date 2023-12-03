import React from "react";

const todoList = [
    { id: 0 , title: "eat"},
    { id: 1 , title: "sleep"},
    { id: 2 , title: "run"},
];

function App() {
  return(
   <div>
    <h1>TODO LIST</h1>
    <ul>
    {todoList.map((todoList) => (
     <li key={todoList.id}>{todoList.title} </li>   
    ))}
    </ul>
   </div> 
  )
}

export default App;
