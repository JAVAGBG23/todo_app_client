import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
