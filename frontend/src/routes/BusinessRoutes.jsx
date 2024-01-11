import React from "react";
import { Routes, Route } from "react-router-dom";
import BusinessAddNews from "../components/business/BusinessAddNews";
import BusinessHome from "../components/business/BusinessHome";
import BusinessInformation from "../components/business/BusinessInformation";
import BusinessNews from "../components/business/BusinessNews";
import BusinessNewsDetail from "../components/business/BusinessNewsDetail";

const BusinessRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/business" element={<BusinessHome />} />
        <Route
          path="/business/business-information"
          element={<BusinessInformation />}
        />
        <Route path="/business/manage-news" element={<BusinessNews />} />
        <Route
          path="/business/manage-news/add-news"
          element={<BusinessAddNews />}
        />
        <Route path="/news-detail" element={<BusinessNewsDetail />} />
      </Routes>
    </div>
  );
};

export default BusinessRoutes;
