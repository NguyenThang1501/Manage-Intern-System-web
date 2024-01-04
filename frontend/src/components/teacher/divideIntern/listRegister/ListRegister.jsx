import React from "react";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Table from "react-bootstrap/esm/Table";
import CustomButton from "../../../common/button/CustomButton";
import "./listRegister.css";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
const ListRegister = () => {
  const navigate = useNavigate();

  const registerList = [
    {
      MaSinhVien: "12345",
      HoTen: "Nguyễn Thị Thắng",
      NganhHoc: "Khoa học dữ liệu",
      CPA: "2.0",
      NgoaiNgu: "Ielts 9.0",
      NV1: "DA1",
      NV2: "DE1",
      NV3: "DS1",
    },
    {
      MaSinhVien: "12345",
      HoTen: "Nguyễn Thị Thắng",
      NganhHoc: "Khoa học dữ liệu",
      CPA: "2.0",
      NgoaiNgu: "Ielts 9.0",
      NV1: "DA1",
      NV2: "DE1",
      NV3: "DS1",
    },
    {
      MaSinhVien: "12345",
      HoTen: "Nguyễn Thị Thắng",
      NganhHoc: "Khoa học dữ liệu",
      CPA: "2.0",
      NgoaiNgu: "Ielts 9.0",
      NV1: "DA1",
      NV2: "DE1",
      NV3: "DS1",
    },
  ];

  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="wrap-allot-intern">
          <Table striped bordered hover className="table-allot-intern">
            <thead>
              <tr>
                <th>STT</th>
                <th>MSV</th>
                <th className="name">Họ và tên</th>
                <th className="major">Ngành học</th>
                <th>CPA tích luỹ</th>
                <th>Chứng chỉ ngoại ngữ</th>
                <th>Nguyện vọng 1</th>
                <th>Nguyện vọng 2</th>
                <th>Nguyện vọng 3</th>
              </tr>
            </thead>
            <tbody>
              {registerList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.MaSinhVien}</td>
                  <td className="name-value">{item.HoTen}</td>
                  <td>{item.NganhHoc}</td>
                  <td>{item.CPA}</td>
                  <td>{item.NgoaiNgu}</td>
                  <td>{item.NV1}</td>
                  <td>{item.NV2}</td>
                  <td>{item.NV3}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="bt-allot-intern">
            <CustomButton buttonText={"Phân công thực tập"} />
            <CustomButton
              onClick={() => {
                navigate("/teacher/allot-intern/result-intern");
              }}
              buttonText={"Xem kết quả phân công"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ListRegister;
