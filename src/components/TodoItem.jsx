import { useState } from "react";
import TrashIcon from "./TrashIcon";

const TodoItem = ({ todo, onCheckboxChange }) => {
  //const [task, setTask] = useState("Study for exam");

  return (
    <div className="todo-item">
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
