import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box display="flex" m={4}>
      <Grid container direction="column" alignItems="center">
        <Typography mb={5} variant="h3" component="h1" color={"text.primary"}>
          Admin Panel
        </Typography>
        <Link to="signup">Регистрация</Link>
        <Link to="login">Войти</Link>
      </Grid>
    </Box>
  );
};

export default Home;
