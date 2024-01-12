import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import SideBar from "../../common/sidebar/SideBar";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { CiEdit } from "react-icons/ci";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";
import "./studentReport.css";

const StudentTopic = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [report, setReport] = useState({});

  const { userInfo } = useUser();
  const [dataStudent, setDataStudent] = useState([]);

  const [isEditingDecribe, setIsEditingDecribe] = useState(false);
  const [editDescribe, setEditDescribe] = useState("");

  const [isEditingTopic, setIsEditingTopic] = useState(false);
  const [editTopic, setEditTopic] = useState("");

  useEffect(() => {
    const fetchStudentResultIntern = async () => {
      try {
        let response = await studentApi.getResultIntern(userInfo.accessToken);
        console.log(response);
        setDataStudent(response.result);
      } catch (error) {
        console.log("Failed ", error);
      }
    };
    fetchStudentResultIntern();
  }, []);

  useEffect(() => {
    const fetchStudentTopic = async () => {
      try {
        let response = await studentApi.getTopicIntern(userInfo.accessToken);
        console.log(response);
        setReport(response);
      } catch (error) {
        console.log("Failed ", error);
      }
    };
    fetchStudentTopic();
  }, []);

  const handleEditTopic = () => {
    setIsEditingTopic(true);
    setEditTopic(report.project);
  };

  const handleEditClick = () => {
    setIsEditingDecribe(true);
    setEditDescribe(report.describe);
  };

  const handleSaveTopic = async () => {
    try {
      setReport({
        project: editTopic,
        describe: report.describe,
        midresult: report.midresult,
        finalresult: report.finalresult,
      });
      const dataTopic = { project: editTopic };
      setIsEditingTopic(false);
      const response = await studentApi.updateTopicIntern(
        userInfo.accessToken,
        dataTopic
      );
      console.log(response);
    } catch (error) {
      console.log("Failed ", error);
    }
  };

  const handleSaveClick = () => {
    try {
      setReport({
        project: report.project,
        describe: editDescribe,
        midresult: report.midresult,
        finalresult: report.finalresult,
      });
      setIsEditingDecribe(false);
      const dataDescribe = { describe: editDescribe };
      const response = studentApi.updateTopicIntern(
        userInfo.accessToken,
        dataDescribe
      );
      console.log(response);
    } catch (error) {
      console.log("Failed ", error);
    }
  };

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
            <Table>
              <thead>
                <tr>
                  <th>
                    <div className="title-score">
                      {showIcon && (
                        <CiEdit
                          className="edit-icon"
                          onClick={handleEditTopic}
                        />
                      )}
                      Đề tài
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td>
                  {isEditingTopic ? (
                    <div>
                      <input
                        className="input-edit"
                        rows={4}
                        value={editTopic}
                        onChange={(e) => setEditTopic(e.target.value)}
                      />
                      <button onClick={handleSaveTopic}>Lưu</button>
                    </div>
                  ) : (
                    <td>{report.project}</td>
                  )}
                </td>
                {/* <td>
                  <input className="input-edit" value={report.topic} />
                </td> */}
              </tbody>
            </Table>

            <Table>
              <thead>
                <tr>
                  <th>
                    <div className="title-score">
                      {showIcon && (
                        <CiEdit
                          className="edit-icon"
                          onClick={handleEditClick}
                        />
                      )}
                      Mô tả
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td>
                  {isEditingDecribe ? (
                    <div>
                      <textarea
                        className="input-edit"
                        rows={4}
                        value={editDescribe}
                        onChange={(e) => setEditDescribe(e.target.value)}
                      />
                      <button onClick={handleSaveClick}>Lưu</button>
                    </div>
                  ) : (
                    <td>{report.describe}</td>
                  )}
                </td>
              </tbody>
            </Table>

            <Table>
              <thead>
                <tr>
                  <th>
                    <div className="title-score">Điểm giữa kỳ</div>
                  </th>
                  <th>
                    <div className="title-score">Điểm cuối kỳ</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td>{report.midresult}</td>
                <td>{report.finalresult}</td>
              </tbody>
            </Table>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default StudentTopic;
