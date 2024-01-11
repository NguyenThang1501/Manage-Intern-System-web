import React, { useEffect } from "react";
import SideBar from "../common/sidebar/SideBar";
import Usersymbol from "../user-icon/Usersymbol";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import HướngDẫnĐăngKý from "./guideline"; // Import your new component


// Rest of your code...

const StudentView = () => {
  // ... (remaining code)

  return (
    <div className="student-view">
      <SideBar />
      {/* Your other components here */}
      <Container>
        <div className="student-content">
          <h3 className="heading-student">
            Hướng dẫn sinh viên đăng ký thực tập
          </h3>
          
          {/* Insert the new component here */}
          <HướngDẫnĐăngKý />

          {/* Remaining code... */}
        </div>
      </Container>
    </div>
  );
};
export default StudentView;