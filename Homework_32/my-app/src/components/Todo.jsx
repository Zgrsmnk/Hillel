import {
  Button,
  Divider,
  InputBase,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import List from "./List";

const Todo = () => {
  return (
    <>
      <Box sx={{background: "#7FDDE3", padding: "0 15px"}}>
        <Typography variant="h6" component="h4">
          TODO
        </Typography>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <TextField placeholder="enter text" sx={{ flex: 1 }} />
          <Box>
            <Divider orientation="vertical" sx={{ height: 10 }} />
            <Button color="secondary" sx={{ p: 1.25 }}>
              Send
            </Button>
          </Box>
        </Paper>
        <List />
      </Box>
    </>
  );
};

export default Todo;
