import { Stack, Typography } from "@mui/material";
import Item from "./Item";

const List = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" component="h3">TODOS</Typography>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
};

export default List;
