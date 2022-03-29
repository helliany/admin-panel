import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from "@mui/system";
import { login } from "../../../redux/auth-reducer";
import { useDispatch } from "react-redux";

const Form = styled("form")({
  width: 400,
  maxWidth: "100%",
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
    setServerError("");

    dispatch(login(data)).catch((err) => {
      if (err?.response?.status === 400 || err?.response?.status === 422) {
        setServerError("Неверный логин или пароль");
      } else {
        setServerError("Что-то пошло не так:(");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <TextField
            label="Почта"
            variant="outlined"
            {...register("email", {
              required: "Это поле обязательно",
            })}
            fullWidth
          />
          <Box color="error.main">{errors.email?.message}</Box>
        </Grid>
        <Grid item>
          <TextField
            label="Пароль"
            variant="outlined"
            type="password"
            {...register("password", {
              required: "Это поле обязательно",
              minLength: {
                value: 6,
                message: "Введите минимум 6 символов",
              },
            })}
            fullWidth
          />
          <Box color="error.main">{errors.password?.message}</Box>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            fullWidth
            disableElevation
            disabled={false}
          >
            Войти
          </Button>
          {serverError && (
            <Box mt={1} color="error.main">
              {serverError}
            </Box>
          )}
        </Grid>
      </Grid>
    </Form>
  );
};

export default LoginForm;
