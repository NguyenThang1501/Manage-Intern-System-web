import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/news">Tin tuyển dụng</Link>
            </li>
            <li>
              <Link to="/school">Nhà trường</Link>
            </li>
            <li>
              <Link to="/link-business">Doanh nghiệp</Link>
            </li>
          </ul>
          <div className="start">
            <div>
              <Link to="/login">
                <button type="submit" className="submit-header">
                  ĐĂNG NHẬP
                </button>
              </Link>
            </div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
