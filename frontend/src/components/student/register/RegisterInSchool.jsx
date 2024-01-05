import React, { useState } from "react";
import SideBar from "../../common/sidebar/SideBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CustomButton from "../../common/button/CustomButton";
import Table from "react-bootstrap/esm/Table";
import TableList from "./TableList";
import "./register.css";
const RegisterInschool = () => {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(true);
  };
  return (
    <div>
      <SideBar />
      <Container>
        <div className="nv-page">
          <Col sm={10} className="list-form">
            <div className="title-cp">Đăng ký nguyện vọng</div>
            <div className="line-form">
              <Form>
                <Form.Group as={Row} className="mb-5">
                  <Form.Label column sm={4}>
                    Nguyện vọng 1 (*)
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Select defaultValue="">
                      <option>1</option>
                      <option>2</option>
                    </Form.Select>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5">
                  <Form.Label column sm={4}>
                    Nguyện vọng 2 (*)
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Select defaultValue="">
                      <option>1</option>
                      <option>2</option>
                    </Form.Select>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5">
                  <Form.Label column sm={4}>
                    Nguyện vọng 3 (*)
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Select defaultValue="">
                      <option>1</option>
                      <option>2</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>

              <CustomButton
                buttonText={"Ghi nhận"}
                onClick={handleButtonClick}
              />
            </div>
          </Col>
        </div>
        <div className="table-list">{showTable && <TableList />}</div>
      </Container>
    </div>
  );
};

export default RegisterInschool;
