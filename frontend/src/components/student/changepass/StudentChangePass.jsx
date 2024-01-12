import React from "react";
import ChangePass from "../../common/changepass/ChangePass";
import SideBar from "../../common/sidebar/SideBar";
import { useUser } from "../../../context/UserContext";

const StudentChangePass = () => {
  const { userInfo } = useUser();
  return (
    <div>
      <SideBar />
      <ChangePass token={userInfo.accessToken} />
    </div>
  );
};

export default StudentChangePass;
