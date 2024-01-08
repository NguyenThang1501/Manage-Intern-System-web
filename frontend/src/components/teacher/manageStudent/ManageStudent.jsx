import React, { useEffect, useState } from "react";
import CustomButton from "../../common/button/CustomButton";
import "./manastudent.css";
import Table from "react-bootstrap/Table";
import Search from "../../common/search/Search";
import SideBar2 from "../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";

import AddStudent from "./AddStudent";
import studentApi from "../../../api/studentApi";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import teacherApi from "../../../api/teacherAPI";
import { useUser } from "../../../context/UserContext";

const ManageStudent = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { userInfo } = useUser();

  useEffect(() => {
    const fetchStudentsInfor = async () => {
      try {
        let response = await teacherApi.getStudentInfor(userInfo.accessToken);
        console.log(response);
        setAllStudents(response);
      } catch (error) {
        console.log("Failed to fetch all students ", error);
      }
    };
    fetchStudentsInfor();
  }, []);

  const handleViewInfor = (item) => {
    navigate("/teacher/mana-student/infor", {
      state: { data: item },
    });
  };

  // const handleDeleteSt = (MaSinhVien) => {
  //     axios.delete("")
  //     .then(res => {
  //       location.reload
  //     })
  //     .catch(err => console.log(err))
  // }

  const [addShow, setAddShow] = useState(false);
  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="container-mana-st">
          <div className="bt-mana-st">
            <CustomButton
              onClick={() => setAddShow(true)}
              buttonText="Thêm hồ sơ sinh viên"
            />
            <AddStudent show={addShow} onHide={() => setAddShow(false)} />
            <Search
              onChange={(e) => setSearch(e.target.value)}
              searchText={"Tìm kiếm sinh viên..."}
            />
          </div>
          <div className="container-tb-mana-st">
            <Table striped bordered hover className="table-mana-st">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>MSV</th>
                  <th>Họ và tên</th>
                  <th>Lớp</th>
                  <th>Xem chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {allStudents
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.name.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.major}</td>
                      <td>
                        <button
                          className="bt-infor-st"
                          onClick={() => handleViewInfor(item)}
                        >
                          <IoPerson className="icon-action-inf" />
                          Xem chi tiết
                        </button>
                        <button className="bt-infor-st">
                          {" "}
                          <IoSettingsOutline className="icon-action-inf" />
                          Sửa
                        </button>
                        <button className="bt-infor-st">
                          <MdDeleteForever className="icon-action-inf" />
                          Xoá
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          {/* {isOverlayVisible && <AddStudent closeOverlay={closeOverlay} />} */}
        </div>
      </Container>
    </div>
  );
};

export default ManageStudent;
