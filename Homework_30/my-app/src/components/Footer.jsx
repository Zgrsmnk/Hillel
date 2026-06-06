import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearSwapiData } from "../redux/slices/todoSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.todos.items.length);

  return (
    <footer className="footer">
      Всього задач: {count}
      <button onClick = {() => dispatch(clearSwapiData())}>Clear SWAPI</button>
    </footer>
  );
};

export default Footer;
