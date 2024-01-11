import React from "react";
import SideBar2 from "../../common/sidebar/SideBar2";
import NewsJobDetail from "../../common/news/NewsJobDetail";
import { useLocation } from "react-router-dom";

const NewsDetail = () => {
  const location = useLocation();
  const newsID = location.state ? location.state.idNews : null;
  return (
    <div>
      <SideBar2 />
      <NewsJobDetail NewsID={newsID} />
    </div>
  );
};

export default NewsDetail;
