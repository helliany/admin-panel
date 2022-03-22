import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <Box display="flex" margin="auto" height="100vh">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography mb={5} variant="h3" component="h1">
          Войти
        </Typography>
        <LoginForm />
        <Box mt={2}>
          Или вы можете <Link to="/signup">зарегистрироваться</Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
