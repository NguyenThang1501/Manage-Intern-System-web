import React from "react";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";

import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import "./report.css";
import TopicReport from "../../../common/report/TopicReport";

const TopicIntern = () => {
  return (
    <div>
      <SideBar2 />
      <TopicReport />
    </div>
  );
};

export default TopicIntern;
