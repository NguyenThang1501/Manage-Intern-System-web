import React from "react";
import SideBar3 from "../common/sidebar/SideBar3";
import NewsJobDetail from "../common/news/NewsJobDetail";
import { useLocation } from "react-router-dom";

const BusinessNewsDetail = () => {
  const location = useLocation();
  const newsID = location.state ? location.state.idNews : null;
  return (
    <div>
      <SideBar3 />
      <NewsJobDetail NewsID={newsID} />
    </div>
  );
};

export default BusinessNewsDetail;
