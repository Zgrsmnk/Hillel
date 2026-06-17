import { Field } from "react-final-form";
import Button from "@mui/material/Button";
import {
  composeValidators,
  minLength,
  required,
} from "../validators/validators";
import Input from "./Input";

const TodoForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="name"
        component={Input}
        validate={composeValidators(required, minLength)}
      />
      <Button variant="outlined" type="submit" style={{ height: "56px" }}>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
