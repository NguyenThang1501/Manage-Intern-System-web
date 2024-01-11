import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import commonAPI from "../../../api/commonApi";

const NewsBoxStudent = ({ link, data }) => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);

  const handleViewNewsDetail = (id, link) => {
    navigate(link, {
      state: { idNews: id },
    });
  };

  return (
    <div
      className="container-box"
      onClick={() => handleViewNewsDetail(data.id, link)}
    >
      <div className="wrap-logo-box">
        <img
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022021/136157719_1515158478680098_1266420984461920289_o.png?inXGI94r3DGKIRIIw8diLEvCmGKSKDUM&itok=XtqOAYIU"
          alt="logo-viettel"
          className="logo-box"
        />
      </div>
      <div className="content-wrapper">
        <div>
          <p className="position-name">{data.position}</p>
          <p className="company-name">{data.business}</p>
        </div>
        <div className="bottom-box">
          <p className="mb-0">Hà Nội</p>
          <div className="bottom-button">
            <button className="action-button">
              <BiDetail className="me-1" />
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBoxStudent;
