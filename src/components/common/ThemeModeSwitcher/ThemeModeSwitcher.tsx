import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import ColorModeContext from "../../../context/context";

const ThemeModeSwitcher: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <IconButton onClick={toggleColorMode} size="small" color="primary">
      {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ThemeModeSwitcher;
