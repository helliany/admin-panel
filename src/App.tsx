import {
  Container,
  createTheme,
  ThemeProvider,
  Box,
  PaletteMode,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import ColorModeContext from "./context/context";
import PrivateRoute from "./routes/PrivateRoute";
import { usersMe } from "./redux/auth-reducer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import UserModels from "./components/UserModels/UserModels";
import UserModel from "./components/UserModels/UserModel/UserModel";

const App: React.FC = () => {
  const [mode, setMode] = useState("light");
  const dispatch = useDispatch();
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode as PaletteMode,
          ...(mode === "light" && {
            background: {
              default: "#f5f5f5",
            },
          }),
        },
      }),
    [mode]
  );

  useEffect(() => {
    dispatch(usersMe());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        <Router basename={process.env.PUBLIC_URL}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              bgcolor: "background.default",
            }}
          >
            <Header />
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                <Route path="models" element={<UserModels />} />
                <Route path="models/:name" element={<UserModel />} />
              </Routes>
            </Container>
          </Box>
        </Router>
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
