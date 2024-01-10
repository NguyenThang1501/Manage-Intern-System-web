import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import SideBar from "../../common/sidebar/SideBar";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { CiEdit } from "react-icons/ci";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";
import "./studentReport.css";

const TopicReport = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [report, setReport] = useState({
    topic:
      "Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực.",
    decribe:
      "Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực.",
  });

  const { userInfo } = useUser();
  const [dataStudent, setDataStudent] = useState([]);

  const [isEditingDecribe, setIsEditingDecribe] = useState(false);
  const [editDecribe, setEditDecribe] = useState("");

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
  });

  const handleEditTopic = () => {
    setIsEditingTopic(true);
    setEditTopic(report.topic);
  };

  const handleEditClick = () => {
    setIsEditingDecribe(true);
    setEditDecribe(report.decribe);
  };

  const handleSaveTopic = () => {
    setReport({
      topic: editTopic,
      decribe: report.decribe,
    });
    setIsEditingTopic(false);
  };

  const handleSaveClick = () => {
    setReport({
      topic: report.topic,
      decribe: editDecribe,
    });
    setIsEditingDecribe(false);
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
                    <td>{report.topic}</td>
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
                {/* <td>{report.decribe}</td> */}
                <td>
                  {isEditingDecribe ? (
                    <div>
                      <textarea
                        className="input-edit"
                        rows={4}
                        value={editDecribe}
                        onChange={(e) => setEditDecribe(e.target.value)}
                      />
                      <button onClick={handleSaveClick}>Lưu</button>
                    </div>
                  ) : (
                    <td>{report.decribe}</td>
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
                <td>10</td>
                <td>10</td>
              </tbody>
            </Table>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default TopicReport;
