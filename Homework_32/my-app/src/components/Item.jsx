import { Paper } from "@mui/material";
import { styled } from "@mui/material";

const Item = styled(Paper)(({theme}) => {
  return {
      textAlign: "left",
      padding: theme.spacing(1),
  };
});

export default Item;
