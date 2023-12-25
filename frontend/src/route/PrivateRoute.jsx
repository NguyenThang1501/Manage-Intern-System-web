// PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useUser } from "../context/UserContext";

const PrivateRoute = ({ element, roles }) => {
  const { user } = useUser();

  if (!user || !roles.includes(user.role)) {
    // Nếu người dùng chưa đăng nhập hoặc vai trò không đúng, chuyển hướng đến trang đăng nhập
    return <Navigate to="/login" />;
  }

  // Nếu đăng nhập và có vai trò đúng, hiển thị component được chuyển vào
  return <Route path="/student" element={element} />;
};

export default PrivateRoute;
