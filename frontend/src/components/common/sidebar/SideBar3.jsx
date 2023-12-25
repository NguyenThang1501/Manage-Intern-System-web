import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SubMenu from "./SubMenu";
import { TiBusinessCard } from "react-icons/ti";
import { PiNewspaperClippingBold } from "react-icons/pi";

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
  return (
    <div className="container-sidebar">
      <div style={{ width: isOpen ? "370px" : "50px" }} className="sidebar">
        <div className="top-section">
          <div
            style={{ marginLeft: isOpen ? "220px" : "0px" }}
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
  );
};

export default SideBar3;
