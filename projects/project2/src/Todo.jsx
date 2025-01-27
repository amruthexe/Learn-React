import React from "react";
import { useState } from "react";
import "./styles.css"
const genId = () => {
  return Math.floor(Math.random() * 100);
};

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handle = (todos) => {
    setTodo((todos) => {
      return todos.concat({
        text: input,
        id: genId(),
      });
    });
    setInput("");
  };

  const del = (id) => {
    setTodo((todos) => {
      return todos.filter((t) => t.id !== id);
    });
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        placeholder="Enter the todo Here"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handle}>Sumit</button>

      <ul className="todos-list">
        {todo.map(({ text, id }) => (
          <li key={id}>
            <span> {text}</span>
            <button onClick={() => del(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
