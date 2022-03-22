import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <Box display="flex" p={2} margin="auto" height="100vh">
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
      </Grid>
    </Box>
  );
};

export default SignUp;
