import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography mb={5} variant="h3" component="h1">
        Главная
      </Typography>
      <Link to="signup">Регистрация</Link>
      <Link to="login">Войти</Link>
    </Grid>
  );
};

export default Home;
