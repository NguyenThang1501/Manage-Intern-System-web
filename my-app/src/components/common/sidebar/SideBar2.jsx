import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaAngleDown } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsQuestionSquare,
  BsCardChecklist,
} from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { TbListDetails } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa6";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSolidSchool } from "react-icons/bi";
import { IoBusinessSharp } from "react-icons/io5";
import SubMenu from "./SubMenu";

const menuItem = [
  {
    path: "/teacher/teacher-infor",
    name: "Thông tin giảng viên",
    icon: <BsFillPersonLinesFill />,
  },
  {
    path: "/teacher/mana-student",
    name: "Quản lý hồ sơ sinh viên",
    icon: <TbListDetails />,
  },

  {
    path: "/teacher/mana-business",
    name: "Quản lý doanh nghiệp",
    icon: <FaRegNewspaper />,
  },
  {
    path: "/teacher/mana-news",
    name: "Quản lý tin tuyển dụng",
    icon: <BsCardChecklist />,
  },
  {
    path: "/teacher/allot-intern",
    name: "Phân công thực tập",
    icon: <TfiWrite />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        path: "/teacher/allot-intern/list-positions",
        name: "Thiết lập danh sách vị trí",
        icon: <BiSolidSchool />,
      },
      {
        path: "/teacher/allot-intern/open-register",
        name: "Mở đăng ký",
        icon: <IoBusinessSharp />,
      },
      {
        path: "/teacher/allot-intern/list-register",
        name: "Danh sách đăng ký",
        icon: <IoBusinessSharp />,
      },
      {
        path: "/teacher/allot-intern/result-intern",
        name: "Kết quả phân công thực tập",
        icon: <IoBusinessSharp />,
      },
    ],
  },
  {
    path: "/teacher/mana-intern",
    name: "Quản lý thực tập",
    icon: <TfiWrite />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        path: "/teacher/mana-intern/regular-report",
        name: "Báo cáo thường xuyên",
        icon: <BiSolidSchool />,
      },
      {
        path: "/teacher/mana-intern/topic-report",
        name: "Báo cáo đề tài thực tập",
        icon: <IoBusinessSharp />,
      },
      {
        path: "/teacher/mana-intern/score",
        name: "Điểm",
        icon: <IoBusinessSharp />,
      },
    ],
  },
];

const SideBar2 = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <div className="container-sidebar">
      <div style={{ width: isOpen ? "350px" : "50px" }} className="sidebar">
        <div className="top-section">
          <div
            style={{ marginLeft: isOpen ? "200px" : "0px" }}
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

export default SideBar2;
