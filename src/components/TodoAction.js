import React, { useState } from "react";
import TodoContent from "./TodoContent";
function TodoAction() {
  const [todo, setTodo] = useState([]);
  const [task, addTask] = useState("");

  const handleClick = () => {
    setTodo([...todo, task]);
    addTask("");
  };
  const handleChange = (props) => {
    addTask(props.target.value);
  };
  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  return (
    <div>
      <h1>My Day</h1>
      <input
        className="input"
        placeholder="input your task"
        onChange={handleChange}
        value={task}
      />
      <button className="add-btn" onClick={handleClick}>
        ADD
      </button>
      <TodoContent todo={todo} handleDelete={handleDelete} />
    </div>
  );
}

export default TodoAction;
