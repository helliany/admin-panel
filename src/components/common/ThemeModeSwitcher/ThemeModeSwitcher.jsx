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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "primary.dark",
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 2,
      }}
    >
      <IconButton
        onClick={colorMode.toggleColorMode}
        color="inherit"
        size="small"
      >
        {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Box>
  );
};

export default ThemeModeSwitcher;
