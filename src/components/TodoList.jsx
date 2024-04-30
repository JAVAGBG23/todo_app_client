import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  return (
    <div className="list">
      {todo.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
