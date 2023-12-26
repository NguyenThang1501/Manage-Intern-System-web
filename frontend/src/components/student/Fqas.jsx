import React, { useEffect } from "react";
import SideBar from "../common/sidebar/SideBar";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import "./student.css";

const Fqas = () => {
  const result = [
    {
      _id: "123",
      name: "NNN",
      MaVT: "VT1",
      TenVT: "asad",
      company: "dfdf",
    },
  ];

  return (
    <div>
      <SideBar />

      <Container>
        <div className="result-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Họ và tên</th>
                <th>Mã vị trí</th>
                <th>Tên vị trí</th>
                <th>Công ty</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.MaVT}</td>
                  <td>{item.TenVT}</td>
                  <td>{item.company}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Fqas;
