import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import ColorModeContext from "../../../context/context";

const ThemeModeSwitcher = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
   
      <IconButton
        onClick={colorMode.toggleColorMode}
        size="small"
        color="primary"
      >
        {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
      </IconButton>
  );
};

export default ThemeModeSwitcher;
