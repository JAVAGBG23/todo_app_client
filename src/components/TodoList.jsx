import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext);

  if (!todo || todo.length === 0) {
    return <p>No todo's yet!</p>;
  }

  const handleCheckboxChange = (id) => {
    const updatedTodos = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodo(updatedTodos);
  };

  return (
    <div className="list">
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckboxChange={() => handleCheckboxChange(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
