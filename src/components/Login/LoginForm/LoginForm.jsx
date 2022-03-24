import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from "@mui/system";

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
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => console.log("data", data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={4}>
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
        </Grid>
      </Grid>
    </Form>
  );
};

export default LoginForm;
