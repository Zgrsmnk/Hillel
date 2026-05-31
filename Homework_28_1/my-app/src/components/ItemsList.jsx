import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ItemsList = ({ items }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {items.map((item, index) => (
        <>
          <div key={index}>
            <Divider />
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          </div>
        </>
      ))}
    </List>
  );
};

export default ItemsList;
