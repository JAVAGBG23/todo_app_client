import { useEffect, createContext, useState } from "react";
import axios from "axios";

// create context
const TodoContext = createContext();

// create provider
const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/todo/all`);
        setTodo(res.data);
      } catch (err) {
        console.log("error: " + err);
      }
    };
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
