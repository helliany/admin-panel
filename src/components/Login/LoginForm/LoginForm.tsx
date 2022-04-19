import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { styled } from "@mui/system";
import { login } from "../../../redux/auth-reducer";
import { useDispatch } from "react-redux";
import axios from 'axios';

const Form = styled("form")({
  width: 400,
  maxWidth: "100%",
});

type FormValues = {
  password: string,
  email: string
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState("");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setServerError("");

    try {
      dispatch(login(data))
    } catch(err) {
      if (axios.isAxiosError(err)) {
        if (err?.response?.status === 400 || err?.response?.status === 422) {
          setServerError("Неверный логин или пароль");
        } else {
          setServerError("Что-то пошло не так:(");
        }
      }
    }
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
