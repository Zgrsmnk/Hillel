import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { setSwapiData, getSwapi, todos } from "../redux/slices/todoSlice";

const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  const swapiData = useSelector(
    (state) => state.todos.swapiData
  );


  useEffect(() => {
    dispatch(getSwapi());
  }, []);

  return (
    <>
      {swapiData && <pre>{JSON.stringify(swapiData, null, 2)}</pre>}
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {items.map((item, index) => (
          <div key={index}>
            <Divider />
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          </div>
        ))}
      </List>
    </>
  );
};

export default ItemsList;
