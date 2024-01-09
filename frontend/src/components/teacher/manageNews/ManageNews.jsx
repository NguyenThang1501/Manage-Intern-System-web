import React, { useEffect, useState } from "react";
import CustomButton from "../../common/button/CustomButton";
import Search from "../../common/search/Search";
import "./mananews.css";
import NewsBox from "./newsbox/NewsBox";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SideBar2 from "../../common/sidebar/SideBar2";
import { useNavigate } from "react-router-dom";
import commonAPI from "../../../api/commonApi";

const ManageNews = () => {
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
            {allNews.map((item, index) => (
              <div key={index} className="box-mana-news">
                <NewsBox
                  link={"/teacher/mana-news/tc-news-detail"}
                  data={item}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManageNews;
