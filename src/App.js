import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import store from "./redux/redux-store";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Container>
          <header></header>
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
          </Routes>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
