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
          src="https://th.bing.com/th/id/R.619db371b7b836575025cfadd605a7cd?rik=m1ilBB81gFirqw&riu=http%3a%2f%2ficon-library.com%2fimages%2fhr-icon%2fhr-icon-28.jpg&ehk=fHQYLpMa6IlnvtywEP5Mvu9jnzHrPqTLpuKcLWMp9CM%3d&risl=&pid=ImgRaw&r=0"
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
