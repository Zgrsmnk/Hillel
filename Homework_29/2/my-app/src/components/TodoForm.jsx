import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/todoSlice";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {
  composeValidators,
  minLength,
  required,
} from "../validators/validators";

const TodoForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    dispatch(addItem(data.name));
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

      <Button variant="outlined" type="submit" style={{ height: "56px" }}>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
