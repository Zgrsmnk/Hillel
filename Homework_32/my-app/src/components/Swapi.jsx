import { Box, Paper, Typography, TextField, Button } from "@mui/material";

const Swapi = () => {
  return (
    <>
      <Box>
        <Typography variant="h3" component="h4">
          SWAPI
        </Typography>
        <Paper sx={{ display: "flex" }}>
          <Typography component="span" sx={{display: "flex", alignItems: "center"}}>https://swapi.py4e.com/api/</Typography>
          <TextField placeholder="people 1" sx={{ flex: 1 }} />
          <Button color="secondary" sx={{ p: 1.25 }}>
            Get Info
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Swapi;
