import { useState } from "react";
import TrashIcon from "./TrashIcon";
import { todoImages } from "../data/todoImg";

const TodoItem = ({ todo, onCheckboxChange }) => {
  //const [task, setTask] = useState("Study for exam");

  const todoImage = todoImages.find((image) => image.id === todo.id);

  return (
    <div className="todo-item">
      {todoImage && (
        <img
          src={todoImage.src}
          style={{ width: "10rem", height: "7rem" }}
          alt={`Todo ${todo.id}`}
        />
      )}
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={onCheckboxChange}
        />
        <span className={`checkmark ${todo.done ? "checked" : ""}`}></span>
        <span className={`task-text ${todo.done ? "completed" : ""}`}>
          <div className="title">{todo.task}</div>
          <TrashIcon className="trash" />
        </span>
      </label>
    </div>
  );
};

export default TodoItem;
