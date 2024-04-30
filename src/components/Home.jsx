import { useState } from "react";
import { todoItems } from "../data/todoItems";
import TodoList from "./TodoList";

const Home = () => {
  const [todos, setTodos] = useState(todoItems);

  return (
    <div className="container">
      <TodoList todo={todos} />
    </div>
  );
};

export default Home;
