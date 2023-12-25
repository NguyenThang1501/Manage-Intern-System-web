import React, { useState } from "react";
import CustomButton from "../../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";
import ReportDetail from "./ReportDetail";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./report.css";

const ProcessReport = (props) => {
  const navigate = useNavigate();
  const reportProcess = [
    {
      MaSinhVien: "12345",
      HoTen: "Nguyễn Thị Thắng",
      SDT: "0123456789",
      Lop: "K66A5",
      NganhHoc: "Khoa học dữ liệu",
      CPA: "2.0",
      Congty: "Viettel",
      Vitri: "Data Engineer",
      Detai: "Mô hình xử lý big data",
    },
    {
      MaSinhVien: "12345",
      HoTen: "Nguyễn Thị Thắng",
      SDT: "0123456789",
      Lop: "K66A5",
      NganhHoc: "Khoa học dữ liệu",
      CPA: "2.0",
      Congty: "Viettel",
      Vitri: "Data Engineer",
      Detai: "Mô hình xử lý big data",
    },
    {
      MaSinhVien: "12345",
      HoTen: "Nguyễn Thị Thắng",
      SDT: "0123456789",
      Lop: "K66A5",
      NganhHoc: "Khoa học dữ liệu",
      CPA: "2.0",
      Congty: "Viettel",
      Vitri: "Data Engineer",
      Detai: "Mô hình xử lý big data",
    },
  ];
  return (
    <div>
      <SideBar2 />
      <Container>
        <Table striped bordered hover className="table-report">
          <thead>
            <tr>
              <th>STT</th>
              <th>MSV</th>
              <th className="name">Họ và tên</th>
              <th>Số điện thoại</th>
              <th>Lớp</th>
              <th>Ngành học</th>
              <th>Công ty</th>
              <th>Vị trí</th>
              <td>Báo cáo thường xuyên</td>
              <td>Đề tài cuối kì thực tập</td>
            </tr>
          </thead>
          <tbody>
            {reportProcess.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.MaSinhVien}</td>
                <td className="name-value">{item.HoTen}</td>
                <td>{item.SDT}</td>
                <td>{item.Lop}</td>
                <td>{item.NganhHoc}</td>
                <td>{item.Congty}</td>
                <td>{item.Vitri}</td>
                <td>
                  <CustomButton
                    onClick={() => {
                      navigate("/teacher/mana-intern/regular-report/detail");
                    }}
                    buttonText={"Xem báo cáo"}
                  />
                </td>
                <td>{item.Detai}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ProcessReport;
