import React from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/hooks";

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
