import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import {
  fetchStart,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../redux/slices/todoSlice";
import Button from "@mui/material/Button";

const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);
  const isLoading = useSelector((state) => state.todos.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
  }, []);

  const handleDeleteItem = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {items.map((item, index) => (
        <div key={index}>
          <Divider />
          <ListItem>
            <ListItemText primary={item.name} />
            <Checkbox
              checked={item.isDone}
              onChange={() =>
                dispatch(
                  toggleTodo({
                    id: item.id,
                    isDone: item.isDone,
                  }),
                )
              }
            />
            <Button
              onClick={() => {
                const newName = prompt("New name", item.name);
                if (newName) {
                  dispatch(
                    updateTodo({
                      id: item.id,
                      name: newName,
                      isDone: item.isDone,
                    }),
                  );
                }
              }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeleteItem(item.id)}
              disabled={isLoading}
            >
              Delete
            </Button>
          </ListItem>
        </div>
      ))}
    </List>
  );
};

export default ItemsList;
