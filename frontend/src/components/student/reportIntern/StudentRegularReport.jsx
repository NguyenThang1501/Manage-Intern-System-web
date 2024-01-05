import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import SideBar from "../../common/sidebar/SideBar";
import teacherApi from "../../../api/teacherAPI";
import { useUser } from "../../../context/UserContext";
import AddReport from "./AddReport";
import { CgAdd } from "react-icons/cg";

const StudentRegularReport = () => {
  const { userInfo } = useUser();

  const [reportData, setReportData] = useState([]);

  const [showAdd, setShowAdd] = useState(false);

  const handleClickButton = () => {
    setShowAdd(!showAdd);
  };

  useEffect(() => {
    const fetchReportDetails = async () => {
      try {
        let response = await teacherApi.getReportDetail(
          userInfo._id,
          userInfo.accessToken
        );
        console.log(response);
        let data = response;
        setReportData(data);
      } catch (error) {
        console.log("Failed to fetch report infor ", error);
      }
    };
    fetchReportDetails();
  }, []);

  return (
    <div>
      <SideBar />
      <Container>
        <div className="detail-report">
          <Col sm={10}>
            <div className="title-cp">Thông tin sinh viên</div>

            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th>Mã sinh viên:</th>
                  {/* <td>{dataStudent._id}</td> */}
                </tr>
                <tr>
                  <th>Họ và tên:</th>
                  {/* <td>{dataStudent.name}</td> */}
                </tr>
                <tr>
                  <th>Công ty:</th>
                  {/* <td>{dataStudent.business}</td> */}
                </tr>
                <tr>
                  <th>Vị trí thực tập:</th>
                  {/* <td>{dataStudent.position}</td> */}
                </tr>
              </tbody>
            </Table>

            <button onClick={handleClickButton} className="bt-add-report">
              <CgAdd />
              Thêm báo cáo
            </button>
            <div className="add-table"> {showAdd && <AddReport />}</div>

            <div>
              <Table striped bordered hover>
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
                      <td>{item.progress}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default StudentRegularReport;
