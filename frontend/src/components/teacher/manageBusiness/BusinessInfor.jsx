import React, { useEffect, useState } from "react";
import NewsBox from "../manageNews/newsbox/NewsBox";
import "./manabusiness.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import SideBar2 from "../../common/sidebar/SideBar2";
import teacherApi from "../../../api/teacherAPI";
import { useUser } from "../../../context/UserContext";
import { useLocation } from "react-router-dom";

const BusinessInfor = () => {
  const { userInfo } = useUser();
  const [businessInfor, setBusinessInfor] = useState([]);
  const location = useLocation();
  const businessID = location.state ? location.state.businessID : null;
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    const fetchBusinessInfor = async () => {
      try {
        let response = await teacherApi.getBusinessInfor(
          businessID,
          userInfo.accessToken
        );
        console.log(response);
        setBusinessInfor(response);
      } catch (error) {
        console.log("Fail to load business infor", error);
      }
    };
    fetchBusinessInfor();
  }, []);

  useEffect(() => {
    const fetchBusinessNews = async () => {
      try {
        let response = await teacherApi.getBusinessNews(
          businessID,
          userInfo.accessToken
        );
        console.log(response);
        setBusinessNews(response);
      } catch (error) {
        console.log("Fail ", error);
      }
    };
    fetchBusinessNews();
  }, []);

  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="top-image">
          <div className="inner-top-img"></div>
          <div className="top-logo"></div>
          <div className="top-text">
            <div className="top-company-name">{businessInfor.name}</div>
            <div className="top-company-link">
              <a href="#">Hotline: {businessInfor.hotline}</a>
            </div>
          </div>
        </div>

        <div className="wrap-infor-cp">
          <div className="banner-company"></div>
          <div className="container-mana-cp">
            <Col sm={8} className="infor-company">
              <div className="intro-company">
                <div className="title-cp">Giới thiệu công ty</div>
                <div className="content-intro-cp">{businessInfor.describe}</div>
              </div>
              <div className="td-company">
                <div className="title-cp">Tin tuyển dụng</div>
                <div className="td-newsbox">
                  {businessNews.map((item, index) => (
                    <div key={index} className="box-mana-news">
                      <NewsBox
                        link={"/teacher/mana-news/tc-news-detail"}
                        data={item}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col sm={4} className="contact-company">
              <div className="title-cp">Thông tin liên hệ</div>
              <div className="address-company">
                <p>Địa chỉ công ty</p>
                <p>{businessInfor.address}</p>
                <hr />
                <p>Nhà tuyển dụng: {businessInfor.hr}</p>
                <p>Gmail: {businessInfor.email}</p>
              </div>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessInfor;
