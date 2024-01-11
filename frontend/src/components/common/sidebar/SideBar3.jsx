import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SubMenu from "./SubMenu";
import { TiBusinessCard } from "react-icons/ti";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Usersymbol from "../../user-icon/Usersymbol";

const menuItem = [
  {
    path: "/business/business-information",
    name: "Thông tin doanh nghiệp",
    icon: <TiBusinessCard />,
  },
  {
    path: "/business/manage-news",
    name: "Quản lý tin tuyển dụng",
    icon: <PiNewspaperClippingBold />,
  },
];

const SideBar3 = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Usersymbol
          userName={"Company"}
          userRole={"bussiness"}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        />
      </div>
      <div className="container-sidebar">
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
          <div className="top-section">
            <Link to="/business">
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className="logo-sidebar"
              >
                IMS_HUS
              </h1>
            </Link>
            <div
              style={{ marginLeft: isOpen ? "100px" : "0px" }}
              className="bars"
            >
              <FaBars className="fa-bar" onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => {
            return <SubMenu item={item} key={index} isOpen={isOpen} />;
          })}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default SideBar3;
