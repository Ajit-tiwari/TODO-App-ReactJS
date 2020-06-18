import React from "react";

const ToDoList = props => {
  return (
    <>
      <div className="todo_style">
        <button
          className="remove"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Remove
        </button>
        <li className="ListItem">{props.TextValue}</li>
      </div>
    </>
  );
};

export default ToDoList;
