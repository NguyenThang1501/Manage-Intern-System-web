import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";
import "./report.css";
import teacherApi from "../../../../api/teacherAPI";

const ReportDetail = (props) => {
  const dataStudent = props.location.state?.data || null;
  const [reportData, setReportData] = useState([]);

  // useEffect(() => {
  //   const fetchReportDetails = async () => {
  //     try {
  //       let response = await teacherApi.getReportDetails();
  //       console.log(response);
  //       let data = response;
  //       setReportData(data);
  //     } catch (error) {
  //       console.log("Failed to fetch report infor ", error);
  //     }
  //   };
  //   fetchReportDetails();
  // }, []);

  reportData = [];
  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="detail-report">
          <Col sm={10}>
            <div className="title-cp">Thông tin sinh viên</div>

            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th>Mã sinh viên:</th>
                  <td>{dataStudent._id}</td>
                </tr>
                <tr>
                  <th>Họ và tên:</th>
                  <td>{dataStudent.name}</td>
                </tr>
                <tr>
                  <th>Công ty:</th>
                  <td>{dataStudent.business}</td>
                </tr>
                <tr>
                  <th>Vị trí thực tập:</th>
                  <td>{dataStudent.position}</td>
                </tr>
              </tbody>
            </Table>
            <Table striped bordered hover className="table-allot-intern">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Thời gian</th>
                  <th>Công việc được giao</th>
                  <th>Mức độ hoàn thành</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.time}</td>
                    <td>{item.work}</td>
                    <td>{item.process}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default ReportDetail;
