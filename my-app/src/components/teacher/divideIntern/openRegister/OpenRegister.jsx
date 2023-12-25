import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../common/button/CustomButton";
import "./openRegister.css";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";

const OpenRegister = () => {
  return (
    <div>
      <SideBar2 />
      <Container>
        <Col sm={8} className="list-date">
          <div className="title-cp">Thiết lập ngày mở đăng ký thực tập</div>
          <div className="open-date">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Ngày mở đăng ký (*)
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Ngày đóng đăng ký (*)
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <CustomButton buttonText={"Ghi nhận"} />
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default OpenRegister;
