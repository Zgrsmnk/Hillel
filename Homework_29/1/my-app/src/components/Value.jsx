import { useSelector } from "react-redux";
import { counter } from "../redux/slices/counterSlice";

const Value = () => {
  const value = useSelector((state) => state.counter.value);
  return <h1>Value: {value}</h1>;
};

export default Value;
