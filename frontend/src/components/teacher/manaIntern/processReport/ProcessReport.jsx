import React, { useState, useEffect } from "react";
import CustomButton from "../../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";
import ReportDetail from "./ReportDetail";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./report.css";
import teacherApi from "../../../../api/teacherAPI";
import { useUser } from "../../../../context/UserContext";

const ProcessReport = () => {
  const { userInfo } = useUser();
  const [reportProcess, setReportProcess] = useState([]);
  const navigate = useNavigate();

  console.log(userInfo);

  useEffect(() => {
    const fetchProcessReport = async () => {
      try {
        let response = await teacherApi.getReport(userInfo.accessToken);
        console.log(response);
        let data = response;
        setReportProcess(data);
      } catch (error) {
        console.log("Failed to fetch report infor ", error);
      }
    };
    fetchProcessReport();
  }, []);

  const handleViewReportClick = (item) => {
    // Navigate to the ReportDetail component and pass data as props
    navigate("/teacher/mana-intern/regular-report/detail", {
      state: { detailData: item },
    });
  };

  // const reportProcess = [
  //   {
  //     MaSinhVien: "12345",
  //     HoTen: "Nguyễn Thị Thắng",
  //     SDT: "0123456789",
  //     Lop: "K66A5",
  //     NganhHoc: "Khoa học dữ liệu",
  //     CPA: "2.0",
  //     Congty: "Viettel",
  //     Vitri: "Data Engineer",
  //     Detai: "Mô hình xử lý big data",
  //   },
  //   {
  //     MaSinhVien: "12345",
  //     HoTen: "Nguyễn Thị Thắng",
  //     SDT: "0123456789",
  //     Lop: "K66A5",
  //     NganhHoc: "Khoa học dữ liệu",
  //     CPA: "2.0",
  //     Congty: "Viettel",
  //     Vitri: "Data Engineer",
  //     Detai: "Mô hình xử lý big data",
  //   },
  //   {
  //     MaSinhVien: "12345",
  //     HoTen: "Nguyễn Thị Thắng",
  //     SDT: "0123456789",
  //     Lop: "K66A5",
  //     NganhHoc: "Khoa học dữ liệu",
  //     CPA: "2.0",
  //     Congty: "Viettel",
  //     Vitri: "Data Engineer",
  //     Detai: "Mô hình xử lý big data",
  //   },
  // ];
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
                <td>{item._id}</td>
                <td className="name-value">{item.name}</td>
                <td>{item.phone}</td>

                <td>{item.major}</td>
                <td>{item.business}</td>
                <td>{item.position}</td>
                <td>
                  {console.log(item)}
                  <CustomButton
                    onClick={() => handleViewReportClick(item)}
                    buttonText={"Xem báo cáo"}
                  />
                </td>
                <button
                  onClick={() => {
                    navigate("/teacher/mana-intern/regular-report/topic");
                  }}
                >
                  <td>{item.project}</td>
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ProcessReport;
