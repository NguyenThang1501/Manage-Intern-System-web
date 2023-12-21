import "./login.css";
import React, { useState, useEffect } from "react";
import loginAPI from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const token = "$2b$12$tvaCRm7ovjHaX.iGUn0yZudWXdlXS9fqk9nTvNmZmAzamVBQSZUjW";

const Login = () => {
  const [_id, set_id] = useState("");
  const [pass, setpass] = useState("");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        _id,
        pass,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row row-login">
          <div className="col-md-6 side-image">
            <div className="text">
              {/* <p>Internship management system</p> */}
            </div>
          </div>
          <div className="col-md-6 right">
            <div className="input-box">
              <header className="header-login">Đăng nhập</header>
              <div className="input-field">
                <input
                  type="text"
                  className="input"
                  id="_id"
                  required=""
                  autoComplete="off"
                  value={_id}
                  onChange={(event) => set_id(event.target.value)}
                />
                <label htmlFor="_id">Username</label>
              </div>
              <div className="input-field">
                <input
                  type="pass"
                  className="input"
                  id="pass"
                  required=""
                  name="pass"
                  value={pass}
                  onChange={(event) => setpass(event.target.value)}
                />
                <label htmlFor="pass">password</label>
              </div>

              <div className="input-field">
                <input
                  onClick={login}
                  type="submit"
                  className="submit"
                  value="Đăng nhập"
                />
              </div>
              <div className="signin">
                <span>
                  <Link to="/">Quay lại trang chủ</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
