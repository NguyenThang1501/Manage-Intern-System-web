import React, { useEffect, useState } from "react";
import SideBar from "../../common/sidebar/SideBar";
import "./news.css";
import NewsPagination from "./NewsPagination";
import { useNavigate } from "react-router-dom";

import NewsBox from "../../teacher/manageNews/newsbox/NewsBox";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import commonAPI from "../../../api/commonApi";
import NewsBoxStudent from "./NewsBoxStudent";

const NewsIntership = () => {
  const navigate = useNavigate();
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        let response = await commonAPI.getAllNews();
        console.log(response);
        setAllNews(response);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    fetchAllNews();
  }, []);
  return (
    <div>
      <SideBar />
      <Container>
        <div className="news-2">
          {allNews.map((item, index) => (
            <Row key={index}>
              {[0, 1].map((colIndex) => (
                <Col key={colIndex}>
                  {allNews[index * 2 + colIndex] && (
                    <NewsBoxStudent
                      link={"/student/news-internship/st-news-detail"}
                      data={allNews[index * 2 + colIndex]}
                    />
                  )}
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsIntership;
