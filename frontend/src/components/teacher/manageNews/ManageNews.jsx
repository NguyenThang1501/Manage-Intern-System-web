import React from "react";
import CustomButton from "../../common/button/CustomButton";
import Search from "../../common/search/Search";
import "./mananews.css";
import NewsBox from "./newsbox/NewsBox";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SideBar2 from "../../common/sidebar/SideBar2";
import { useNavigate } from "react-router-dom";

const ManageNews = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SideBar2 />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="container-mana-news">
            <div className="bt-mana-news">
              <CustomButton
                onClick={() => navigate("/teacher/mana-news/add-news")}
                buttonText={"Thêm tin tuyển dụng"}
              />
              <Search searchText={"Tìm kiếm tin tuyển dụng..."} />
            </div>
            <div className="box-mana-news">
              <NewsBox />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManageNews;
