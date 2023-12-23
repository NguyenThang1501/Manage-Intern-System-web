import React from "react";
import CustomButton from "../../common/button/CustomButton";
import Search from "../../common/search/Search";
import "./mananews.css";
import NewsBox from "./newsbox/NewsBox";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SideBar2 from "../../common/sidebar/SideBar2";

const ManageNews = () => {
  return (
    <SideBar2>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="container-mana-news">
            <div className="bt-mana-news">
              <CustomButton buttonText={"Thêm tin tuyển dụng"} />
              <Search searchText={"Tìm kiếm tin tuyển dụng..."} />
            </div>
            <div className="box-mana-news">
              <NewsBox />
            </div>
          </Col>
        </Row>
      </Container>
    </SideBar2>
  );
};

export default ManageNews;
