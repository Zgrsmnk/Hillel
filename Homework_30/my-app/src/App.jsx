import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  
  return (
    <div className="container">
      <Provider store={store}>
        <h1>Todo</h1>
        <TodoForm />
        <ItemsList />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
