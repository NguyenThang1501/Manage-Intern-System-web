import React from "react";
import SideBar from "../../common/sidebar/SideBar";
import NewsJobDetail from "../../common/news/NewsJobDetail";
import { useLocation } from "react-router-dom";

const StudentNewsJobDetail = () => {
  const location = useLocation();
  const newsID = location.state ? location.state.idNews : null;

  return (
    <div>
      <SideBar />
      <NewsJobDetail NewsID={newsID} />
    </div>
  );
};

export default StudentNewsJobDetail;
