import React from "react";
import "./position.css";
import SideBar from "../../common/sidebar/SideBar";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";

const Intershippositons = () => {
  return (
    <div className="wrap-intern-positions">
      <SideBar />
      <Container>
        <div className="positions-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã vị trí</th>
                <th>Tên vị trí</th>
                <th>Công ty</th>
                <th>Số lượng tuyển</th>
                <th>Yêu cầu</th>
                <th>Yêu cầu về GPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>DA-VT</td>
                <td>Data Analyst</td>
                <td>Viettel</td>
                <td>5</td>
                <td>Kiến thức nền tảng..</td>
                <td>2.8</td>
              </tr>
              <tr>
                <td>2</td>
                <td>DS-VT</td>
                <td>Data Scientist</td>
                <td>Viettel</td>
                <td>5</td>
                <td>Kiến thức nền tảng..</td>
                <td>2.8</td>
              </tr>
              <tr>
                <td>3</td>
                <td>DE-VT</td>
                <td>Data Engineer</td>
                <td>Viettel</td>
                <td>5</td>
                <td>Kiến thức nền tảng..</td>
                <td>2.8</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Intershippositons;
