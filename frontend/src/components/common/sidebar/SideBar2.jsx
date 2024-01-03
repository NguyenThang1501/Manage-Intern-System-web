import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaBars, FaRegListAlt, FaLockOpen } from "react-icons/fa";
import { BsFillPersonLinesFill, BsCardChecklist } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { FaBusinessTime, FaRegNewspaper } from "react-icons/fa6";
import { MdManageAccounts, MdFeaturedPlayList, MdTopic } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { GrScorecard } from "react-icons/gr";
import { IoBusinessSharp } from "react-icons/io5";
import SubMenu from "./SubMenu";
import Usersymbol from "../../user-icon/Usersymbol";
import { useNavigate } from "react-router-dom";

const menuItem = [
  {
    path: "/teacher/teacher-infor",
    name: "Thông tin giảng viên",
    icon: <BsFillPersonLinesFill />,
  },
  {
    path: "/teacher/mana-student",
    name: "Quản lý hồ sơ sinh viên",
    icon: <PiStudentBold />,
  },

  {
    path: "/teacher/mana-business",
    name: "Quản lý doanh nghiệp",
    icon: <FaBusinessTime />,
  },
  {
    path: "/teacher/mana-news",
    name: "Quản lý tin tuyển dụng",
    icon: <FaRegNewspaper />,
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
        icon: <FaRegListAlt />,
      },
      {
        path: "/teacher/allot-intern/open-register",
        name: "Mở đăng ký",
        icon: <FaLockOpen />,
      },
      {
        path: "/teacher/allot-intern/list-register",
        name: "Danh sách đăng ký",
        icon: <MdFeaturedPlayList />,
      },
      {
        path: "/teacher/allot-intern/result-intern",
        name: "Kết quả phân công thực tập",
        icon: <BsCardChecklist />,
      },
    ],
  },
  {
    path: "/teacher/mana-intern",
    name: "Quản lý thực tập",
    icon: <MdManageAccounts />,
  },
];

const SideBar2 = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Usersymbol
          userName={"Thang"}
          userRole={"teacher"}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        />
      </div>
      <div className="container-sidebar">
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
          <div className="top-section">
            <Link to="/teacher">
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className="logo-sidebar"
              >
                IMS_HUS
              </h1>
            </Link>
            <div
              style={{ marginLeft: isOpen ? "110px" : "0px" }}
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

export default SideBar2;
