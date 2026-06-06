import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { API_URL } from "../constants";
import { setSwapiData, todos } from "../redux/slices/todoSlice";

const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  const swapiData = useSelector(
    (state) => state.todos.swapiData
  );


  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetch(API_URL);
        const resporse = await data.json();

        dispatch(todos.actions.setSwapiData(resporse));

      } catch (error) {
        console.log("Error", error);
      }
    };
    
    getTodos();
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
