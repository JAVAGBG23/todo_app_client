import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [task, setTask] = useState("");

  const { todo, setTodo, addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      task,
    };

    addTodo(newTodo);

    setTodo([...todo, newTodo]);

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
