import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/hooks";
import SignUpForm from "./SignUpForm/SignUpForm";

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  transition: ".2s all ease-in-out",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const SignUp: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <>
      {isAuth ? (
        <Navigate to="/" replace />
      ) : (
        <Box display="flex" margin="auto" maxWidth="100%">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              mb={5}
              variant="h3"
              component="h1"
              color={"text.primary"}
            >
              Регистрация
            </Typography>
            <SignUpForm />
            <Box mt={3} color={"text.primary"}>
              Уже зарегистрированы? <StyledLink to="/login">Войти</StyledLink>
            </Box>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default SignUp;
