import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { CiEdit } from "react-icons/ci";
import SideBar2 from "../../../common/sidebar/SideBar2";

const TopicReport = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [report, setReport] = useState({
    topic:
      "Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực.",
    decribe:
      "Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực.",
  });
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
                  <td>
                    {/* <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            /> */}
                    0123456
                  </td>
                </tr>
                <tr>
                  <th>Họ và tên:</th>
                  <td>
                    {/* <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            /> */}
                    Nguyễn Thị Thắng
                  </td>
                </tr>
                <tr>
                  <th>Công ty:</th>
                  <td>
                    {/* <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            /> */}
                    Viettel
                  </td>
                </tr>
                <tr>
                  <th>Vị trí thực tập:</th>
                  <td>
                    {/* <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            /> */}
                    Data Engineer
                  </td>
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
                <td>{report.topic}</td>
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
                <td>{report.decribe}</td>
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
                    <td>{midScore}</td>
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
                    <td>{finalScore}</td>
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
