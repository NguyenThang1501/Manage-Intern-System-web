import React, { useEffect } from "react";
import CustomButton from "../common/button/CustomButton";
import SideBar2 from "../common/sidebar/SideBar2";
import Usersymbol from "../user-icon/Usersymbol";
import { useNavigate } from "react-router-dom";
import Dashboard from "./homepage/Dashboard";
import Heading from "../common/heading/Heading";
import "./homeTeacher.css";
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
      <div className="heading-teacher">
        <Heading
          title="Một số thông tin về sinh viên và doanh nghiệp"
          subtitle=""
        />
      </div>

      <div>
        <Dashboard />
      </div>
    </>
  );
};

export default TeacherHome;
