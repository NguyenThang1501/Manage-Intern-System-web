import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";

const AddStudent = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Container>
          <Col sm={14} className="list-form">
            <div className="title-cp">Thêm hồ sơ sinh viên</div>
            <div className="line-form">
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
                  Giới tính (*)
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Ngày sinh (*)
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="date" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Khoa
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

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
                  CPA
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <CustomButton
                onClick={props.onHide}
                className="add-positions"
                buttonText={"Thêm sinh viên"}
              />
            </div>
          </Col>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AddStudent;
