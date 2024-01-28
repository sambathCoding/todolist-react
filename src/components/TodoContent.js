import React from "react";

function TodoContent(props) {
  console.log(props);
  return props.todo.length === 0 ? (
    <p>Hello again</p>
  ) : (
    props.todo.map((item, index) => (
      <div className="content">
        <p className="todoList">
          {index} {item}
        </p>
        <button onClick={() => props.handleDelete(index)}>x</button>
      </div>
    ))
  );
}

export default TodoContent;
