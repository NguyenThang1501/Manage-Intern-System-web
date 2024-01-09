import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { CiEdit } from "react-icons/ci";
import SideBar2 from "../../../common/sidebar/SideBar2";
import teacherApi from "../../../../api/teacherAPI";
import { useUser } from "../../../../context/UserContext";
import { useLocation } from "react-router-dom";

const TopicReport = () => {
  const [showIcon, setShowIcon] = useState(true);
  const location = useLocation();
  const [report, setReport] = useState({
    project: "",
    describe: "",
    finalresult: "",
    midresult: "",
  });

  const dataStudent = location.state ? location.state.topicData : null;
  const { userInfo } = useUser();

  const [midScore, setMidScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [isEditingFinal, setIsEditingFinal] = useState(false);
  const [editFinal, setEditFinal] = useState("");

  const [isEditingMid, setisEditingMid] = useState(false);
  const [editMid, setEditMid] = useState("");

  const handleEditMid = () => {
    setisEditingMid(true);
    setEditMid(midScore);
  };

  const handleEditFinal = () => {
    setIsEditingFinal(true);
    setEditFinal(finalScore);
  };

  const handleSaveMid = () => {
    setMidScore(editMid);
    setisEditingMid(false);
  };

  const handleSaveFinal = () => {
    setFinalScore(editFinal);
    setIsEditingFinal(false);
  };

  useEffect(() => {
    const fetchTopicReport = async () => {
      try {
        let response = await teacherApi.getStudentTopicReport(
          userInfo.accessToken,
          dataStudent._id
        );
        console.log(response);
        setReport(response);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    fetchTopicReport();
  }, []);

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
            <Table>
              <thead>
                <tr>
                  <th>
                    <div className="title-score">Đề tài</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td>{report.project}</td>
              </tbody>
            </Table>

            <Table>
              <thead>
                <tr>
                  <th>
                    <div className="title-score">Mô tả</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td>{report.describe}</td>
              </tbody>
            </Table>

            <Table>
              <thead>
                <tr>
                  <th>
                    <div className="title-score">
                      {showIcon && (
                        <CiEdit className="edit-icon" onClick={handleEditMid} />
                      )}
                      Điểm giữa kỳ
                    </div>
                  </th>
                  <th>
                    <div className="title-score">
                      {showIcon && (
                        <CiEdit
                          className="edit-icon"
                          onClick={handleEditFinal}
                        />
                      )}
                      Điểm cuối kỳ
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td>
                  {isEditingMid ? (
                    <div>
                      <input
                        className="input-edit"
                        rows={4}
                        value={editMid}
                        onChange={(e) => setEditMid(e.target.value)}
                      />
                      <button onClick={handleSaveMid}>Lưu</button>
                    </div>
                  ) : (
                    <td>{report.midresult}</td>
                  )}
                </td>
                <td>
                  {isEditingFinal ? (
                    <div>
                      <input
                        className="input-edit"
                        rows={4}
                        value={editFinal}
                        onChange={(e) => setEditFinal(e.target.value)}
                      />
                      <button onClick={handleSaveFinal}>Lưu</button>
                    </div>
                  ) : (
                    <td>{report.finalresult}</td>
                  )}
                </td>
              </tbody>
            </Table>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default TopicReport;
