import react from "react";

const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.elements.title.value;
    props.onAddTodo(todoTitle);
    console.log(todoTitle)
    event.target.reset();
  }
  return (
    <form onSubmit={handleAddTodo} >
      <label htmlFor="todoTitle">"Title"</label>
      <input id="todoTitle" name="title"></input>
      <button>"add"</button>
    </form>
  )
};

export default AddTodoForm;
