import { useSelector } from "react-redux";

const Footer = () => {
  const count = useSelector((state) => state.todos.items.length);

  return <footer>Всього задач: {count}</footer>;
};

export default Footer;
