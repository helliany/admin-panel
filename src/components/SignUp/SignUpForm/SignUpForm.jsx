import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
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
  const onSubmit = (data) => console.log("h", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: 400,
        maxWidth: "100%",
      }}
    >
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <TextField
            label="Почта"
            variant="outlined"
            {...register("username", {
              required: "Это поле обязательно",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный адрес почты",
              },
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
            Отправить
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
