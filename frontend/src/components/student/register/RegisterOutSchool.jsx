import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import SideBar from "../../common/sidebar/SideBar";
import { useUser } from "../../../context/UserContext";
import studentApi from "../../../api/studentApi";

const RegisterOutSchool = () => {
  const { userInfo } = useUser();
  const [internInfor, setInternInfor] = useState({
    position: "",
    business: "",
    instructor: "",
    phone: "",
    mail: "",
  });

  const handleSubmit = async () => {
    console.log(internInfor);
    try {
      const response = await studentApi.submitInternOut(
        userInfo.accessToken,
        internInfor
      );
      console.log(response);

      if (response.success) {
        alert("Hệ thống đã ghi nhận thông tin thực tập bên ngoài của bạn");
      }
    } catch (error) {
      console.log("Failed", error);
    }
  };

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
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setInternInfor({
                          ...internInfor,
                          position: e.target.value,
                        })
                      }
                    ></Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Công ty (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setInternInfor({
                          ...internInfor,
                          business: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Họ tên người hướng dẫn (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setInternInfor({
                          ...internInfor,
                          instructor: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    SĐT người hướng dẫn (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setInternInfor({
                          ...internInfor,
                          phone: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={5}>
                    Gmail người hướng dẫn (*)
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setInternInfor({
                          ...internInfor,
                          mail: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Form.Group>
              </Form>
              <div className="bt-submit">
                <CustomButton buttonText={"Ghi nhận"} onClick={handleSubmit} />
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default RegisterOutSchool;
