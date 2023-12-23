import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./listpositions.css";
import CustomButton from "../../../common/button/CustomButton";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";

const ListPositions = () => {
  return (
    <SideBar2>
      <Col sm={10} className="list-form">
        <div className="title-cp">Thêm vị trí thực tập</div>
        <div className="line-form">
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Mã vị trí (*)
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Tên vị trí (*)
              </Form.Label>
              <Col sm={4}>
                <Form.Select defaultValue="">
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Công ty (*)
            </Form.Label>
            <Col sm={10}>
              <Form.Select defaultValue="">
                <option>1</option>
                <option>2</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Số lượng (*)
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Yêu cầu (*)
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" rows={3} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              CPA tối thiểu (nếu có)
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <CustomButton className="add-positions" buttonText={"Thêm vị trí"} />
        </div>
      </Col>
      <Col sm={10}>
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
      </Col>
    </SideBar2>
  );
};

export default ListPositions;
