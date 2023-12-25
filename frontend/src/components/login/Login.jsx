import "./login.css";
import React, { useState, useEffect } from "react";
import loginAPI from "../../api/loginApi";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Login = () => {
  const [_id, set_id] = useState("");
  const [pass, setpass] = useState("");
  const { setUserInfo } = useUser();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let response = await loginAPI.post(_id, pass);
      console.log(response);

      let role = response.role;
      localStorage.setItem("token", response.accessToken);
      setUserInfo(response._id, role);
      console.log(role);
      if (role === "student") {
        navigate("/student");
      } else {
        if (role === "teacher") {
          navigate("/teacher");
        } else {
          navigate("/business");
        }
      }
    } catch (error) {
      console.log("Failed to login ", error);
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
                  type="password"
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
                  onClick={handleLogin}
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
