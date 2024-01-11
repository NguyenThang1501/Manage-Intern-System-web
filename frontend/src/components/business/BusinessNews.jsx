import React, { useState, useEffect } from "react";
import SideBar3 from "../common/sidebar/SideBar3";
import NewsBox from "../teacher/manageNews/newsbox/NewsBox";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CustomButton from "../common/button/CustomButton";
import BusinessAddNews from "./BusinessAddNews";
import { useNavigate } from "react-router-dom";
import businessApi from "../../api/businessAPI";
import { useUser } from "../../context/UserContext";

const BusinessNews = () => {
  const navigate = useNavigate();
  const [allNews, setAllNews] = useState([]);
  const { userInfo } = useUser();

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        let response = await businessApi.getAllNews(userInfo.accessToken);
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
      <SideBar3 />
      <Container>
        <div className="business-mana-news">
          <CustomButton
            onClick={() => navigate("/business/manage-news/add-news")}
            buttonText={"Thêm tin tuyển dụng"}
          />
        </div>
        {allNews.map((item, index) => (
          <div key={index} className="news-business-box">
            <NewsBox link={"/news-detail"} data={item} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default BusinessNews;
