import React from "react";
import SideBar from "../../common/sidebar/SideBar";
import Container from "react-bootstrap/Container";
import "./register.css";

const StudentRegister = () => {
  return (
    <SideBar>
      <Container>
        <div>
          Sinh viên có hai hình thức để đăng ký thực tập:
          <li>
            1. Nếu sinh viên muốn thực tập tại các vị trí trong danh sách giảng
            viên cung cấp, chọn mục đăng ký theo trường và lựa chọn vị trí muốn
            thực tập.
          </li>
          <li>
            2. Nếu sinh viên đang thực tập tại các doanh nghiệp ngoài danh sách,
            chọn mục thực tập ngoài trường và điền đầy đủ thông tin về doanh
            nghiệp và vị trí sinh viên đang thực tập.
          </li>
        </div>
      </Container>
    </SideBar>
  );
};

export default StudentRegister;
