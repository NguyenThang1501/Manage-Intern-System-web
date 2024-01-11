import React, { useEffect, useState } from "react";
import SideBar3 from "../common/sidebar/SideBar3";
import Col from "react-bootstrap/esm/Col";
import "./business.css";
import Container from "react-bootstrap/esm/Container";
import { useUser } from "../../context/UserContext";
import commonAPI from "../../api/commonApi";

const BusinessInformation = () => {
  const [businessInfor, setBusinessInfor] = useState("");
  const { userInfo } = useUser();

  console.log(userInfo);
  console.log("bussss");
  useEffect(() => {
    const fetchBusinessInfor = async () => {
      try {
        let response = await commonAPI.getBusinessInfor(
          userInfo.accessToken,
          userInfo._id
        );
        console.log(response);
        console.log("1111");
        let data = response;
        setBusinessInfor(data);
      } catch (error) {
        console.log("Failed to fetch business infor ", error);
      }
    };
    fetchBusinessInfor();
  }, []);

  return (
    <div>
      <SideBar3 />
      <Container>
        <div className="wrap-business-infor">
          <div className="banner-company"></div>
          <div className="business-infor-content">
            <div className="container-mana-cp">
              <Col sm={14} className="infor-company">
                <div className="intro-company">
                  <div className="title-cp">Giới thiệu công ty</div>
                  <div className="content-intro-cp">
                    {businessInfor.describe}
                  </div>
                </div>
              </Col>
            </div>
            <Col sm={4} className="contact-company">
              <div className="title-cp">Thông tin liên hệ</div>
              <div className="address-company">
                <p>Địa chỉ công ty</p>
                <p>{businessInfor.address}</p>
                <hr />
                <p>Xem bản đồ</p>
              </div>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessInformation;
