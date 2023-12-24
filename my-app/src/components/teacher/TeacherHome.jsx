import React, { useEffect } from "react";
import CustomButton from "../common/button/CustomButton";
import SideBar2 from "../common/sidebar/SideBar2";
import Usersymbol from "../user-icon/Usersymbol";
import { useNavigate } from "react-router-dom";

const TeacherHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <SideBar2>
        <Usersymbol
          userName={"Thang"}
          userRole={"teacher"}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        />
        <div>TeacherHome</div>
        <CustomButton buttonText={"Click me"} />
      </SideBar2>
    </>
  );
};

export default TeacherHome;
