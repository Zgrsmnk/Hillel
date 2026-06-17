import TextField from "@mui/material/TextField";

const Input = (props) => {
  const { label, meta, input } = props;

  return (
    <TextField
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...input}
    />
  );
};

export default Input;
