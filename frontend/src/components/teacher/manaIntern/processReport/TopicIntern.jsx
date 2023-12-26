import React from "react";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";

import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import "./report.css";

const TopicIntern = () => {
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
                <td>
                  Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng
                  trong Radar và điều khiển hoả lực.
                </td>
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
                <td>
                  Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu ứng dụng
                  trong Radar và điều khiển hoả lực. Nghiên cứu, đánh giá các
                  giải pháp gọt bằng dữ liệu ứng dụng trong Radar và điều khiển
                  hoả lực. Nghiên cứu, đánh giá các giải pháp gọt bằng dữ liệu
                  ứng dụng trong Radar và điều khiển hoả lực. Nghiên cứu, đánh
                  giá các giải pháp gọt bằng dữ liệu ứng dụng trong Radar và
                  điều khiển hoả lực.
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

export default TopicIntern;
