import React, { useEffect } from "react";
import SideBar from "../common/sidebar/SideBar";
import Usersymbol from "../user-icon/Usersymbol";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import HướngDẫnĐăngKý from "./guideline";

const StudentView = () => {
  return (
    <div className="student-view">
      <SideBar />

      <Container>
        <div className="student-content">
          <h3 className="heading-student">
            Hướng dẫn sinh viên đăng ký thực tập
          </h3>

          <HướngDẫnĐăngKý />
        </div>
      </Container>
    </div>
  );
};
export default StudentView;
