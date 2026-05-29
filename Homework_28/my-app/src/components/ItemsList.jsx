import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ItemsList = (props) => {
  const { items } = props;
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {items.map((item) => (
        <>
          <Divider />
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        </>
      ))}
    </List>
  );
};

export default ItemsList;
