import React from "react";
import SideBar from "../../common/sidebar/SideBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const RegisterInschool = () => {
  return (
    <div>
      <SideBar />
      <Container>
        <div className="nv-page">
          <h4 className="nv-heading">Nhập các nguyện vọng</h4>
          <p>
            Lưu ý: Sinh viên chỉ nhập mã vị trí muốn đăng ký thực tập vào ô
            nguyện vọng.
          </p>
          <p>
            Mức độ ưu tiên của các nguyện vọng sẽ giảm dần theo thứ tự: Nguyện
            vọng 1, nguyện vọng 2, nguyện vọng 3.
          </p>
          <hr />
          <Form.Control
            type="text"
            placeholder="Nguyện vọng 1"
            className="nv-input"
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Nguyện vọng 2"
            className="nv-input"
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Nguyện vọng 3"
            className="nv-input"
          />
          <br />
          <Button variant="outline-primary" className="nv-button">
            Đăng ký
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default RegisterInschool;
