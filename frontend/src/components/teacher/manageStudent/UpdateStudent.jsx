import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import SideBar2 from "../../common/sidebar/SideBar2";
import { useLocation, useNavigate } from "react-router-dom";
import teacherApi from "../../../api/teacherAPI";
import { useUser } from "../../../context/UserContext";
import "./manastudent.css";
const UpdateStudent = () => {
  const [studentUpdate, setStudentUpdate] = useState({
    _id: "",
    name: "",
    birthday: "",
    sex: "",
    field: "",
    major: "",
    email: "",
    phone: "",
    cpa: "",
  });
  const { userInfo } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const updateData = location.state ? location.state.updateData : null;

  const handleButtonUpdate = async () => {
    try {
      const response = await teacherApi.updateStudent(
        userInfo.accessToken,
        studentUpdate,
        updateData._id
      );
      console.log(response);
      alert("Đã sửa " + updateData._id);
      navigate("/teacher/mana-student");
    } catch (error) {
      console.log("Failed", error);
    }
  };
  return (
    <div>
      <SideBar2 />

      <Container>
        <Col>
          <div className="update-st-tb">
            <div className="title-cp">Sửa hồ sơ sinh viên</div>
            <div className="line-form">
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    Mã sinh viên (*)
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      defaultValue={updateData._id}
                      onChange={(e) =>
                        setStudentUpdate({
                          ...studentUpdate,
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
                      defaultValue={updateData.name}
                      onChange={(e) =>
                        setStudentUpdate({
                          ...studentUpdate,
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
                    defaultValue={updateData.sex}
                    onChange={(e) =>
                      setStudentUpdate({
                        ...studentUpdate,
                        sex: e.target.value,
                      })
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
                    defaultValue={updateData.birthday}
                    onChange={(e) =>
                      setStudentUpdate({
                        ...studentUpdate,
                        birthday: e.target.value,
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
                    defaultValue={updateData.field}
                    onChange={(e) =>
                      setStudentUpdate({
                        ...studentUpdate,
                        field: e.target.value,
                      })
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
                    defaultValue={updateData.major}
                    onChange={(e) =>
                      setStudentUpdate({
                        ...studentUpdate,
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
                    type="text"
                    defaultValue={updateData.email}
                    onChange={(e) =>
                      setStudentUpdate({
                        ...studentUpdate,
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
                    defaultValue={updateData.phone}
                    onChange={(e) =>
                      setStudentUpdate({
                        ...studentUpdate,
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
                    defaultValue={updateData.cpa}
                    onChange={(e) =>
                      setStudentUpdate({
                        ...studentUpdate,
                        cpa: e.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>

              <CustomButton
                onClick={() => {
                  handleButtonUpdate();
                }}
                className="add-positions"
                buttonText={"Sửa thông tin"}
              />
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default UpdateStudent;
