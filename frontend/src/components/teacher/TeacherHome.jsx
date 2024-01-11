import React, { useEffect } from "react";
import CustomButton from "../common/button/CustomButton";
import SideBar2 from "../common/sidebar/SideBar2";
import Usersymbol from "../user-icon/Usersymbol";
import { useNavigate } from "react-router-dom";
import Dashboard from "./homepage/Dashboard";

const TeacherHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <SideBar2 />

      <div>
        <Dashboard /> {/* Include the Dashboard component here */}
        TeacherHome
      </div>
      {/* <CustomButton buttonText={"Click me"} /> */}
    </>
  );
};

export default TeacherHome;
