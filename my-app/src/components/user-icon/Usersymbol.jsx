import React from "react";
import "./usersymbol.css";
import { PiStudentBold } from "react-icons/pi";

import Dropdown from "react-bootstrap/Dropdown";
const Usersymbol = () => {
  return (
    <Dropdown>
      <div>
        <Dropdown.Toggle className="my-user">
          <PiStudentBold className="student-icon" />
          <div className="user-infor">
            <li className="user-name">Hi, Thang</li>
            <li className="user-role">Student</li>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </div>
    </Dropdown>
  );
};

export default Usersymbol;
