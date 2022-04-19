import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "@mui/system";
import { authAPI } from "../../../api/api";
import { login } from "../../../redux/auth-reducer";
import { useDispatch } from "react-redux";
import axios from 'axios';

const Form = styled("form")({
  width: 400,
  maxWidth: "100%",
});

type FormValues = {
  username: string,
  password: string,
  email: string
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState("");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setServerError("");

    try {
      const response = await authAPI.signup(data);
      if (response && response?.status === 200) {
        dispatch(login(data));
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err?.response?.status === 400) {
          setServerError("Такой пользователь уже существует");
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
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный адрес почты",
              },
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
          <TextField
            label="Логин"
            variant="outlined"
            {...register("username", {
              required: "Это поле обязательно",
            })}
            fullWidth
          />
          <Box color="error.main">{errors.username?.message}</Box>
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
            Отправить
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

export default SignUpForm;
