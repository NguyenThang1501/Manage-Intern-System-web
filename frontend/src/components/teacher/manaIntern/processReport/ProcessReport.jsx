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
    navigate("/teacher/mana-intern/regular-report/detail", {
      state: { detailData: item },
    });
  };

  const handleViewTopicClick = (item) => {
    navigate("/teacher/mana-intern/regular-report/topic", {
      state: { topicData: item },
    });
  };

  return (
    <div>
      <SideBar2 />
      <Container>
        <Table striped bordered hover className="table-report">
          <thead>
            <tr className="text-center">
              <th>STT</th>
              <th>MSV</th>
              <th className="name">Họ và tên</th>
              <th>Số điện thoại</th>

              <th>Ngành học</th>
              <th>Công ty</th>
              <th>Vị trí</th>
              <th>Báo cáo thường xuyên</th>
              <th>Đề tài cuối kì thực tập</th>
            </tr>
          </thead>
          <tbody>
            {reportProcess.map((item, index) => (
              <tr key={index} className="text-center">
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
                <td>
                  <button onClick={() => handleViewTopicClick(item)}>
                    {item.project}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ProcessReport;
