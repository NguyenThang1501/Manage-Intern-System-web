import React from "react";
import CustomButton from "../../../common/button/CustomButton";
import "./newsbox.css";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";

const NewsBox = (props) => {
  const navigate = useNavigate();

  const handleViewNewsDetail = (id) => {
    navigate("/news-detail", {
      state: { idNews: id },
    });
  };

  return (
    <div
      className="container-box"
      onClick={() => handleViewNewsDetail("news0")}
    >
      <div className="wrap-logo-box">
        <img
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022021/136157719_1515158478680098_1266420984461920289_o.png?inXGI94r3DGKIRIIw8diLEvCmGKSKDUM&itok=XtqOAYIU"
          alt="logo-viettel"
          className="logo-box"
        />
      </div>
      <div>
        <div>
          <p className="position-name">Intern Data Engineer</p>
          <p className="company-name">
            TẬP ĐOÀN CÔNG NGHỆ - VIỄN THÔNG QUÂN ĐỘI
          </p>
        </div>
        <div className="bottom-box">
          <p>Hà Nội</p>
          <p>Còn 17 ngày để ứng tuyển</p>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
