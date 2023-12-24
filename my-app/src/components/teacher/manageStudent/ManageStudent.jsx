import React, { useEffect, useState } from "react";
import CustomButton from "../../common/button/CustomButton";
import "./manastudent.css";
import Table from "react-bootstrap/Table";
import Search from "../../common/search/Search";
import SideBar2 from "../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";

import AddStudent from "./AddStudent";
import studentApi from "../../../api/studentApi";

const ManageStudent = () => {
  const [allStudents, setAllStudents] = useState([]);
  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        let response = await studentApi.getAll();
        console.log(response);
        setAllStudents(response);
      } catch (error) {
        console.log("Failed to fetch all students ", error);
      }
    };
    fetchAllStudents();
  }, []);

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
            <Search searchText={"Tìm kiếm sinh viên..."} />
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
                {allStudents.map((student, index) => {
                  <tr key={student.MaSinhvien}>
                    <td>{index + 1}</td>
                    <td>{student.MaSinhvien}</td>
                    <td>{student.HoTen}</td>
                    <td>{student.Lop}</td>
                    <td>Sua , Xoa</td>
                  </tr>;
                })}
                {/* <tr>
                  <td>1</td>
                  <td>21000415</td>
                  <td>Vương Thị Diễm Quỳnh</td>
                  <td>K66 Khoa học dữ liệu</td>
                  <td>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>21000415</td>
                  <td>Vương Thị Diễm Quỳnh</td>
                  <td>K66 Khoa học dữ liệu</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>21000415</td>
                  <td>Vương Thị Diễm Quỳnh</td>
                  <td>K66 Khoa học dữ liệu</td>
                  <td></td>
                </tr> */}
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
