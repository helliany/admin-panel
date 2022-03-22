import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <Box display="flex" margin="auto" height="100vh">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography mb={5} variant="h3" component="h1">
          Регистрация
        </Typography>
        <SignUpForm />
        <Box mt={2}>
          Уже зарегистрированы? <Link to="/login">Войти</Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default SignUp;
