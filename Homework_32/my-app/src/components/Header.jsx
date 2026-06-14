import { Link } from "react-router";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        component="header"
        sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", background: "lightgray", marginBottom: 10 }}
      >
        <Typography variant="h4" component="h2">
          Header
        </Typography>
        <Link to="/">Main</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/swapi">Swapi</Link>
      </Box>
    </>
  );
};

export default Header;
