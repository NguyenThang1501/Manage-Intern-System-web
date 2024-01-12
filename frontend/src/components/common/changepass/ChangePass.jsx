import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/esm/Table";
import Form from "react-bootstrap/Form";
import "./changepass.css";
import CustomButton from "../button/CustomButton";
import commonAPI from "../../../api/commonApi";

const ChangePass = (token) => {
  const [newPass, setNewsPass] = useState("");
  const handleChange = async () => {
    console.log(token.token);
    try {
      console.log(newPass);
      const data = { pass: newPass };
      const response = await commonAPI.changePass(token.token, data);
      console.log(response);
      alert("Đổi mật khẩu thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="change-pass-form">
      <Col sm={10}>
        <div className="title-cp">Đổi mật khẩu</div>
        <Table striped bordered hover className="input-change">
          <tbody>
            <tr>
              <div className="input-field">
                <label htmlFor="pass">Nhập mật khẩu mới</label>
                <input
                  type="password"
                  className="input"
                  id="pass"
                  required=""
                  name="pass"
                  value={newPass}
                  onChange={(event) => setNewsPass(event.target.value)}
                />
              </div>
            </tr>
          </tbody>
        </Table>
        <CustomButton buttonText={"Ghi nhận"} onClick={() => handleChange()} />
      </Col>
    </div>
  );
};

export default ChangePass;
