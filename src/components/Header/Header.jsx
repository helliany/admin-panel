import React from "react";
import { Button, Container, Grid, Box } from "@mui/material";
import ThemeModeSwitcher from "../common/ThemeModeSwitcher/ThemeModeSwitcher";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "@mui/icons-material";
import { logout } from "../../redux/auth-reducer";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(logout());
  }

  return (
    <header>
      <Box
        sx={{
          p: 1,
          borderBottom: "1px solid",
          borderColor: "grey.300",
        }}
      >
        <Container>
          <Grid
            container
            alignItems="center"
            wrap="nowrap"
            justifyContent="flex-end"
            spacing={4}
          >
            <Grid item>
              <ThemeModeSwitcher />
            </Grid>
            {isAuth && (
              <Grid item>
                <Button
                  onClick={handleClick}
                  variant="contained"
                  size="medium"
                  color="primary"
                  type="submit"
                  fullWidth
                  disableElevation
                  startIcon={<Logout />}
                  sx={{
                    bgcolor: "primary.dark",
                  }}
                >
                  Выйти
                </Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
