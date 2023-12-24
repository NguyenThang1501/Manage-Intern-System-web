import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";

const ReportDetail = () => {
  return (
    <div>
      <SideBar2>
        <Container>
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
                {/* {reportProcess.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.MaSinhVien}</td>
                  <td className="name-value">{item.HoTen}</td>
                  <td>{item.SDT}</td>
                  <td>{item.Lop}</td>
                  <td>{item.NganhHoc}</td>
                  <td>{item.Congty}</td>
                  <td>{item.Vitri}</td>
                  <td>
                    <CustomButton buttonText={"Xem báo cáo"} />
                  </td>
                  <td>{item.Detai}</td>
                </tr>
              ))} */}
              </tbody>
            </Table>
          </Col>
        </Container>
      </SideBar2>
    </div>
  );
};

export default ReportDetail;
