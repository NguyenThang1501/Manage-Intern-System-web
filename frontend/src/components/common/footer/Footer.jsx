import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h5>NHOM 1</h5>
              <p>
                Hệ thống quản lý thực tập cho sinh viên trường Đại học Khoa học
                Tự nhiên - ĐHQGHN
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2"></div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Infor</h5>
              <p>
                <i className="fa-solid fa-phone-volume"></i> 0975438856
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> nhom1@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-paper-plane"></i> Ha Noi, Viet Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
