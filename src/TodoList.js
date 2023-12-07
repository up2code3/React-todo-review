import React from "react";

const todoList = [
    { id: 0 , title: "eat"},
    { id: 1 , title: "sleep"},
    { id: 2 , title: "run"},
];

const TodoList = () => {
    return(
        <ul>
        {todoList.map((todoList) => (
         <li key={todoList.id}>{todoList.title} </li>   
        ))}
        </ul>    
    )
}

export default TodoList;