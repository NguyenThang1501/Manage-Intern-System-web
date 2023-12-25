import React from "react";
import SideBar3 from "../common/sidebar/SideBar3";
import Col from "react-bootstrap/esm/Col";
import "./business.css";
import Container from "react-bootstrap/esm/Container";

const BusinessInformation = () => {
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
                    Tổng Công ty Công nghiệp Công nghệ cao Viettel (Viettel High
                    Tech) là đơn vị nghiên cứu sản xuất chủ lực của Viettel
                    trong lĩnh vực quân sự và dân sự, tự tin làm chủ toàn trình
                    từ nghiên cứu, thiết kế, chế tạo, sản xuất, và kinh doanh
                    sản phẩm với tầm nhìn trở thành một công ty công nghệ hiện
                    đại, hàm lượng tri thức cao, có thương hiệu trên thị trường
                    quốc tế. <br />
                    Các sản phẩm của Tổng Công ty dựa trên nền tảng công nghệ
                    tiên phong (Pioneer Technologies), kiến tạo nên một hệ thống
                    an ninh quốc phòng tin cậy để bảo vệ vững chắc chủ quyền
                    quốc gia, một mạng lưới kết nối vạn vật thông minh (5G, iOT,
                    AI) để phát triển kinh tế - xã hội. Với sứ mệnh “Mang lại sự
                    đơn giản cho cuộc sống, góp phần xây dựng xã hội an toàn,
                    nơi vạn vật được kết nối thông minh", chúng tôi tự tin bước
                    đồng nhịp cùng các tập đoàn công nghệ lớn mạnh trên thế
                    giới. Tổng doanh thu lũy kế mang lại từ hoạt động nghiên
                    cứu, sản xuất trang thiết bị công nghệ cao đến thời điểm
                    hiện tại đạt trên 1.5 tỷ USD.
                  </div>
                </div>
              </Col>
            </div>
            <Col sm={4} className="contact-company">
              <div className="title-cp">Thông tin liên hệ</div>
              <div className="address-company">
                <p>Địa chỉ công ty</p>
                <p>Thanh Xuân, Hà Nội</p>
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
