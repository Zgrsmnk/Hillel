import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (data) => {
    setTodos([...todos, data.name]);
  };

  return (
    <>
      <h1>Todo</h1>
      <TodoForm onSubmit={handleSubmit} />
      <ItemsList items={todos} />
    </>
  );
}

export default App;
