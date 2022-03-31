import React from "react";
import {
  Button,
  Container,
  Grid,
  Box,
  IconButton,
  styled,
} from "@mui/material";
import ThemeModeSwitcher from "../common/ThemeModeSwitcher/ThemeModeSwitcher";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "@mui/icons-material";
import { logout } from "../../redux/auth-reducer";
import { Link as RouterLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

const CustomIconButton = styled(Button)(({ theme }) => ({
  "@media (max-width: 767px)": {
    minWidth: "auto",
    padding: "5px",
    border: "none",
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    ".MuiBox-root": {
      display: "none",
    },
  },
}));

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(logout());
  };

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
              <IconButton color="primary" component={RouterLink} to="/">
                <HomeIcon />
              </IconButton>
            </Grid>
            {isAuth && (
              <Grid
                item
                sx={{
                  mr: "auto",
                }}
              >
                <CustomIconButton
                  component={RouterLink}
                  to="/models"
                  variant="outlined"
                  size="medium"
                  color="primary"
                  fullWidth
                  startIcon={<SettingsIcon />}
                >
                  <Box component="span">Admin</Box>
                </CustomIconButton>
              </Grid>
            )}
            <Grid item>
              <ThemeModeSwitcher />
            </Grid>
            {isAuth && (
              <Grid item>
                <CustomIconButton
                  onClick={handleClick}
                  variant="contained"
                  size="medium"
                  color="primary"
                  fullWidth
                  disableElevation
                  startIcon={<Logout />}
                  sx={{
                    bgcolor: "primary.dark",
                  }}
                >
                  <Box component="span">Выйти</Box>
                </CustomIconButton>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
