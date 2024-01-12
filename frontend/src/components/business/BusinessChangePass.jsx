import React from "react";
import SideBar3 from "../common/sidebar/SideBar3";
import ChangePass from "../common/changepass/ChangePass";
import { useUser } from "../../context/UserContext";

const BusinessChangePass = () => {
  const { userInfo } = useUser();
  return (
    <div>
      <SideBar3 />
      <ChangePass token={userInfo.accessToken} />
    </div>
  );
};

export default BusinessChangePass;
