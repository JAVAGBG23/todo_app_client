import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      task,
      done: false,
    };

    addTodo(newTodo);
    console.log(newTodo);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Write your next task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </div>
    </form>
  );
};

export default TodoForm;
