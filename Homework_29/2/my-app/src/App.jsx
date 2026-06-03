import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <Provider store={store}>
      <h1>Todo</h1>
      <TodoForm />
      <ItemsList />
    </Provider>
  );
}

export default App;
