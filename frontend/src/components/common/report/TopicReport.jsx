import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import "./report.css";
import { CiEdit } from "react-icons/ci";

const TopicReport = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [report, setReport] = useState({
    topic:
      "Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực.",
    decribe:
      "Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển hoả lực.",
  });

  const [isEditingDecribe, setIsEditingDecribe] = useState(false);
  const [editDecribe, setEditDecribe] = useState("");

  const [isEditingTopic, setIsEditingTopic] = useState(false);
  const [editTopic, setEditTopic] = useState("");

  const handleEditTopic = () => {
    setIsEditingTopic(true);
    setEditTopic(report.topic);
  };

  const handleEditClick = () => {
    setIsEditingDecribe(true);
    setEditDecribe(report.decribe);
  };

  // const handleSaveClick = async () => {
  //   try {
  //     // Gửi request API để cập nhật dữ liệu
  //     const response = await fetch('your-api-endpoint', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Các headers khác cần thiết
  //       },
  //       body: JSON.stringify({ describe: editDecribe }), // Gửi giá trị sửa đổi lên server
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to update data');
  //     }

  //     // Nếu cập nhật thành công, cập nhật state và kết thúc trạng thái sửa đổi
  //     setIsEditingDecribe(false);
  //     // Có thể làm một số công việc khác nếu cần

  //   } catch (error) {
  //     console.error('Error updating data:', error);
  //     // Xử lý lỗi nếu có
  //   }
  // };

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
