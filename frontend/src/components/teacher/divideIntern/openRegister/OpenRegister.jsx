import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../common/button/CustomButton";
import "./openRegister.css";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";
import teacherApi from "../../../../api/teacherAPI";
import { useUser } from "../../../../context/UserContext";

const OpenRegister = () => {
  const { userInfo } = useUser();
  const [dateRegister, setDateRegister] = useState({
    start_time: "",

    end_time: "",
  });

  const handleButtonSetDate = async () => {
    try {
      const response = await teacherApi.openDate(
        userInfo.accessToken,
        dateRegister
      );
      console.log(response);
      alert("Hệ thống đã ghi nhận thiết lập ngày mở đăng ký");
    } catch (error) {
      console.log("Failed ", error);
    }
  };

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
                <Form.Control
                  type="date"
                  onChange={(e) =>
                    setDateRegister({
                      ...dateRegister,
                      start_time: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Ngày đóng đăng ký (*)
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="date"
                  onChange={(e) =>
                    setDateRegister({
                      ...dateRegister,
                      end_time: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>
            <CustomButton
              onClick={() => {
                handleButtonSetDate();
              }}
              buttonText={"Ghi nhận"}
            />
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default OpenRegister;