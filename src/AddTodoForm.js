import React, { useState } from "react";

const AddTodoForm = (props) => {

const [todoTitle, setTodoTitle] = useState('');
  
  const handleTitleChange = (event) => {
    let newTodoTitle =  event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo(todoTitle);
    event.target.reset();
  }
  
  return (
    <form onSubmit={handleAddTodo} >
      <label htmlFor="todoTitle">"Title"</label>
      <input 
      id="todoTitle" 
      name="title"
      value={todoTitle}
      onChange={handleTitleChange}
      />
      <button>"add"</button>
    </form>
  )
};

export default AddTodoForm;
