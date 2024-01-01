import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    { id: 0 , title: "eat"},
    { id: 1 , title: "sleep"},
    { id: 2 , title: "run"},
];

const TodoList = () => {
    return(
        <ul>
        {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo}/>
        ))}
        </ul>    
    )
}

export default TodoList;