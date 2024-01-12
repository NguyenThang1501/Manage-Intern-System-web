import React from "react";
import { useUser } from "../../../context/UserContext";
import SideBar2 from "../../common/sidebar/SideBar2";
import ChangePass from "../../common/changepass/ChangePass";

const TeacherChangePass = () => {
  const { userInfo } = useUser();
  return (
    <div>
      <SideBar2 />
      <ChangePass token={userInfo.accessToken} />
    </div>
  );
};

export default TeacherChangePass;
