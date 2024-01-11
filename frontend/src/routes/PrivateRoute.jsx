// PrivateRoute.js
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Login from "../components/login/Login";

const PrivateRoute = ({ element, roles, ...rest }) => {
  const { userInfo } = useUser();

  if (!roles.includes(userInfo.role)) {
    // Người dùng không có quyền truy cập, chuyển hướng về trang không phải là trang chính
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route {...rest} element={element} />
    </Routes>
  );
};

export default PrivateRoute;
