import React from "react";
import SideBar from "../../common/sidebar/SideBar";
import "./news.css";
import NewsPagination from "./NewsPagination";
import NewsBox from "../../teacher/manageNews/newsbox/NewsBox";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

const NewsIntership = () => {
  return (
    <div>
      <SideBar />
      <Container>
        <div className="news-2">
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
        {/* <NewsPagination className="n-pagination" /> */}
      </Container>
    </div>
  );
};

export default NewsIntership;
