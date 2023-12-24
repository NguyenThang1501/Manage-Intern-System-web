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

const ManageStudent = () => {
  //const [allStudents, setAllStudents] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const fetchAllStudents = async () => {
  //     try {
  //       let response = await studentApi.getAll();
  //       console.log(response);
  //       setAllStudents(response);
  //     } catch (error) {
  //       console.log("Failed to fetch all students ", error);
  //     }
  //   };
  //   fetchAllStudents();
  // }, []);

  const allStudents = [
    {
      MaSinhVien: "1234567",
      HoTen: "Nguyễn Văn A",
      Lop: "K66 Khoa học dữ liệu",
      GioiTinh: "Nam",
      KhoaID: "123",
      NgoainguID: "001",
      GPA: "2.0",
      GiaoVienQuanLiID: "002",
    },
    {
      MaSinhVien: "1234",
      HoTen: "Nguyễn Văn B",
      Lop: "K66 Khoa học dữ liệu",
      GioiTinh: "Nam",
      KhoaID: "123",
      NgoainguID: "001",
      GPA: "2.0",
      GiaoVienQuanLiID: "003",
    },
    {
      MaSinhVien: "1234",
      HoTen: "Nguyễn Thị Linh",
      Lop: "K66 Khoa học dữ liệu",
      GioiTinh: "Nam",
      KhoaID: "123",
      NgoainguID: "001",
      GPA: "2.0",
      GiaoVienQuanLiID: "003",
    },
    {
      MaSinhVien: "1234",
      HoTen: "Nguyễn Thị Bình",
      Lop: "K66 Khoa học dữ liệu",
      GioiTinh: "Nam",
      KhoaID: "123",
      NgoainguID: "001",
      GPA: "2.0",
      GiaoVienQuanLiID: "003",
    },
  ];

  const [addShow, setAddShow] = useState(false);
  return (
    <SideBar2>
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
                      : item.HoTen.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.MaSinhVien}</td>
                      <td>{item.HoTen}</td>
                      <td>{item.Lop}</td>
                      <td>
                        <button className="bt-infor-st">
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
    </SideBar2>
  );
};

export default ManageStudent;
