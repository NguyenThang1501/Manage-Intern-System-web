import React from "react";
import SideBar3 from "../common/sidebar/SideBar3";
import NewsBox from "../teacher/manageNews/newsbox/NewsBox";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CustomButton from "../common/button/CustomButton";
import BusinessAddNews from "./BusinessAddNews";
import { useNavigate } from "react-router-dom";

const BusinessNews = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SideBar3 />
      <Container>
        <div className="business-mana-news">
          <CustomButton
            onClick={() => navigate("/business/manage-news/add-news")}
            buttonText={"Thêm tin tuyển dụng"}
          />
          <Row>
            <Col>
              <NewsBox />
            </Col>
            <Col>
              <NewsBox />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewsBox />
            </Col>
            <Col>
              <NewsBox />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BusinessNews;
