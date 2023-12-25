import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { userRole } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        userRole === "student" ? <Component {...props} /> : navigate("/login")
      }
    />
  );
};

export default ProtectedRoute;
