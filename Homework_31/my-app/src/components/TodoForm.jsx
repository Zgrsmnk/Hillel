import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/todoSlice";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

import {
  composeValidators,
  minLength,
  required,
} from "../validators/validators";
import { API_URL } from "../constants";
 

const TodoForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.isLoading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    dispatch(addTodo(data.name));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextField
        label="name"
        {...register("name", {
          validate: composeValidators(required, minLength),
        })}
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />

      <Button variant="outlined" type="submit" style={{ height: "56px" }} disabled={isLoading}>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
