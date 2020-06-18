import React, { useState } from "react";
import ToDoList from "./todo";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  const updateInput = event => {
    setName(event.target.value);
  };
  const AddItem = event => {
    setItems([...items, name]);
    setName("");
  };
  const deleteItem = id => {
    setItems(oldList => {
      return oldList.filter((val, index) => {
        return id !== index;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>TODO APP</h1>
          <br />
          <input
            type="text"
            placeholder="Enter Item to Add"
            onChange={updateInput}
            value={name}
          />
          <button onClick={AddItem}> Add </button>
          <ol>
            {items.map((itemValue, index) => {
              return (
                <ToDoList
                  TextValue={itemValue}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
