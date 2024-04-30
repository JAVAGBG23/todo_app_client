import { useState } from "react";

const TodoItem = () => {
  const [task, setTask] = useState("Study for exam");

  return (
    <div className="todo-card">
      <div className="task">{task}</div>
    </div>
  );
};

export default TodoItem;
