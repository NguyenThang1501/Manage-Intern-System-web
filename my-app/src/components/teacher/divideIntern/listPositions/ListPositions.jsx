import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./listpositions.css";
import CustomButton from "../../../common/button/CustomButton";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";
import AddPosition from "./AddPosition";

const ListPositions = () => {
  const [add, setAdd] = useState(false);

  return (
    <SideBar2>
      <Col sm={10}>
        <CustomButton
          onClick={() => setAdd(true)}
          className="add-positions"
          buttonText={"Thêm vị trí"}
        />

        <Table striped bordered hover className="list-positions-tb">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã VT</th>
              <th>Tên vị trí</th>
              <th>Công ty</th>
              <th>Yêu cầu</th>
              <th>Số lượng</th>
              <th>CPA tối thiểu</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>DA1</td>
              <td>Data Analyst</td>
              <td>Viettel</td>
              <td>Kiến thức nền tảng</td>
              <td>5</td>
              <td>2.8</td>
              <td>Sửa, Xoá</td>
            </tr>
          </tbody>
        </Table>
        <AddPosition show={add} onHide={() => setAdd(false)} />
      </Col>
    </SideBar2>
  );
};

export default ListPositions;
