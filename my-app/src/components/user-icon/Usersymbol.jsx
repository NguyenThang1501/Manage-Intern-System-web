import React from "react";
import "./usersymbol.css";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const Usersymbol = ({ onClick, userName, userRole }) => {
  return (
    <div onClick={onClick}>
      <div className="my-user">
        {userRole === "student" ? (
          <PiStudentBold className="user-icon" />
        ) : (
          <LiaChalkboardTeacherSolid className="user-icon" />
        )}

        <div className="user-infor">
          <li className="user-name">Hi, {userName}</li>
          <li className="user-role">Đăng xuất</li>
        </div>
      </div>
    </div>
  );
};

export default Usersymbol;
