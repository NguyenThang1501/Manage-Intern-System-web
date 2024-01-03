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
        <div className="form-infor-business">
          <Col sm={10} className="list-form">
            <div className="title-cp">Đăng ký thực tập bên ngoài</div>
            <div className="line-form">
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Vị trí (*)
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Select defaultValue="">
                      <option>1</option>
                      <option>2</option>
                    </Form.Select>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Công ty (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Họ tên người hướng dẫn (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    SĐT người hướng dẫn (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Gmail người hướng dẫn (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
              </Form>
              <div className="bt-submit">
                <CustomButton buttonText={"Ghi nhận"} />
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default RegisterOutSchool;
