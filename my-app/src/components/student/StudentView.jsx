import React from "react";
import SideBar from "../common/sidebar/SideBar";
import Usersymbol from "../user-icon/Usersymbol";
import "./student.css";

const StudentView = () => {
  return (
    <div className="student-view">
      <SideBar />
      <Usersymbol />
      <div className="student-content">
        <h3 className="heading-student">
          Hướng dẫn sinh viên đăng ký thực tập
        </h3>
        <div className="guide-1">
          <img
            className="img-guide-1"
            src="./images/student-guide.png"
            alt="student-guide"
          ></img>
          <p>
            Hướng dẫn 1: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Itaque possimus nesciunt doloremque fugit accusantium tempore,
            sapiente beatae architecto cupiditate aspernatur ipsam reprehenderit
            consequatur placeat? Dolorem adipisci repudiandae nihil qui animi?
          </p>
        </div>
        <div className="guide-2">
          <p>
            Hướng dẫn 2: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolorum veritatis repellat eligendi recusandae doloremque odio
            fugiat ut consequuntur, explicabo quibusdam reiciendis aliquid a
            incidunt voluptas deserunt, laboriosam dicta corporis libero.
          </p>
          <img
            className="img-guide-2"
            src="./images/student-guide-2.png"
            alt="student-guide-2"
          />
        </div>
      </div>
    </div>
  );
};
export default StudentView;
