import TodoItem from "./TodoItem";

const TodoList = ({ todo, onCheckboxChange, handleDelete }) => {
  return (
    <div className="list">
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckboxChange={() => onCheckboxChange(todo.id)}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
