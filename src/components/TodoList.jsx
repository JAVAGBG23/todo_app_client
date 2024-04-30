import TodoItem from "./TodoItem";

const TodoList = ({ todo, onCheckboxChange }) => {
  return (
    <div className="list">
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckboxChange={() => onCheckboxChange(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
