import { useState } from "react";
import { Form } from "react-final-form";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (values) => {
    setTodos([...todos, values.name]);
  };

  return (
    <>
      <h1>Todo</h1>
      <Form onSubmit={handleSubmit} render={TodoForm} />
      <ItemsList items={todos} />
    </>
  );
}

export default App;
