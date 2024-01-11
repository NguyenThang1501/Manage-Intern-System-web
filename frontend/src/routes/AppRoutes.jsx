import StudentRoutes from "./StudentRoutes";
import TeacherRoutes from "./TeacherRoutes";
import BusinessRoutes from "./BusinessRoutes";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { useUser } from "../context/UserContext";
import Login from "../components/login/Login";

const AppRoutes = () => {
  const userInfo = useUser();
  if (!userInfo) {
    return <Login />;
  } else {
    if (userInfo.role == "student") {
      console.log("ssss");
      return <StudentRoutes />;
    } else {
      if (userInfo.role == "teacher") {
        return <TeacherRoutes />;
      } else {
        return <BusinessRoutes />;
      }
    }
  }
};
export default AppRoutes;
