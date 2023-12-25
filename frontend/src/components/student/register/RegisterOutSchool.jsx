import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import SideBar from "../../common/sidebar/SideBar";

const RegisterOutSchool = () => {
  return (
    <div>
      <SideBar />
      <Container>
        <Col sm={14} className="form-infor-business">
          <div className="heading-form">
            <h5> Thông tin doanh nghiệp sinh viên đang thực tập bên ngoài</h5>
            <hr />
          </div>
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mã sinh viên (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Họ và tên (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Ngành học
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Số điện thoại
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Tên công ty (*)
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Vị trí đang thực tập (*)
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <div className="bt-form-business">
              <CustomButton buttonText={"Gửi thông tin"} />
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default RegisterOutSchool;
