import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";

const AddStudent = (props) => {
  const [studentInfor, setStudentInfor] = useState({
    _id: "",
    name: "",
    sex: "",
    birth: "",
    khoa: "",
    major: "",
    email: "",
    phone: "",
    cpa: "",
  });

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios.post('...', studentInfor)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  const handleSubmit = (e) => {
    console.log(studentInfor);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <Col>
          <div className="title-cp">Thêm hồ sơ sinh viên</div>
          <div className="line-form px-5">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mã sinh viên (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setStudentInfor({
                        ...studentInfor,
                        _id: e.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Họ và tên (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setStudentInfor({
                        ...studentInfor,
                        name: e.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>
            </Form>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Giới tính (*)
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setStudentInfor({ ...studentInfor, sex: e.target.value })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Ngày sinh (*)
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="date"
                  onChange={(e) =>
                    setStudentInfor({
                      ...studentInfor,
                      birth: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Khoa
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setStudentInfor({ ...studentInfor, khoa: e.target.value })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Ngành học
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setStudentInfor({
                      ...studentInfor,
                      major: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  onChange={(e) =>
                    setStudentInfor({
                      ...studentInfor,
                      email: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Số điện thoại
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setStudentInfor({
                      ...studentInfor,
                      phone: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                CPA
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setStudentInfor({ ...studentInfor, cpa: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <CustomButton
                onClick={() => {
                  props.onHide();
                  handleSubmit();
                }}
                buttonText={"Thêm sinh viên"}
              />
            </div>
          </div>
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default AddStudent;
