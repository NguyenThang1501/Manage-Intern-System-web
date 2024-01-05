import React, { useState, useEffect } from "react";
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
import { BiSolidSchool, BiSolidReport } from "react-icons/bi";
import { IoBusinessSharp } from "react-icons/io5";
import SubMenu from "./SubMenu";
import Usersymbol from "../../user-icon/Usersymbol";
import { useNavigate } from "react-router-dom";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";

const menuItem = [
  {
    path: "/student/student-infor",
    name: "Hồ sơ cá nhân",
    icon: <BsFillPersonLinesFill />,
  },
  {
    path: "/student/internship-positions",
    name: "Chi tiết các vị trí thực tập",
    icon: <TbListDetails />,
  },
  {
    path: "",
    name: "Đăng ký thực tập",
    icon: <TfiWrite />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        path: "/student/student-register/in-school",
        name: "Đăng ký theo trường",
        icon: <BiSolidSchool />,
      },
      {
        path: "/student/student-register/out-school",
        name: "Đăng ký bên ngoài",
        icon: <IoBusinessSharp />,
      },
    ],
  },
  {
    path: "/student/news-internship",
    name: "Tin tuyển dụng",
    icon: <FaRegNewspaper />,
  },
  {
    path: "",
    name: "Báo cáo thực tập",
    icon: <BiSolidReport />,
    iconClosed: <IoIosArrowDown />,
    iconOpened: <IoIosArrowUp />,
    subNav: [
      {
        path: "/student/report/report-regular",
        name: "Báo cáo thường xuyên",
        icon: "",
      },
      {
        path: "/student/report/report-topic",
        name: "Báo cáo đề tài thực tập",
        icon: "",
      },
    ],
  },
  {
    path: "/student/fqas",
    name: "Kết quả phân công",
    icon: <BsCardChecklist />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const { userInfo } = useUser();
  const [userName, setUserName] = useState();

  console.log(userInfo);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchStudentInfor = async () => {
      try {
        let response = await studentApi.get(userInfo._id, userInfo.accessToken);
        console.log(response);
        let data = response;
        console.log(data);
        setUserName(data.name);
      } catch (error) {
        console.log("Failed to fetch student infor ", error);
      }
    };
    fetchStudentInfor();
  }, []);

  return (
    <div>
      <div>
        <Usersymbol
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          userName={userName}
          userRole={"student"}
        />
      </div>
      <div className="container-sidebar">
        <div style={{ width: isOpen ? "320px" : "50px" }} className="sidebar">
          <div className="top-section">
            <Link to="/student">
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

export default SideBar;
