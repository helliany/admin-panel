import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <Box display="flex" p={2} margin="auto" height="100vh">
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
      </Grid>
    </Box>
  );
};

export default Login;
