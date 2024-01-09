import React, { useState, useEffect } from "react";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Table from "react-bootstrap/esm/Table";
import CustomButton from "../../../common/button/CustomButton";
import "./listRegister.css";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import teacherApi from "../../../../api/teacherAPI";
import ProgressBar from "../../../common/progressbar/ProgressBar";
const ListRegister = () => {
  const navigate = useNavigate();

  const { userInfo } = useUser();

  const [registerList, setRegisterList] = useState([]);
  const [showProgressbar, setShowProgressbar] = useState(false);

  useEffect(() => {
    const fetchRegisterList = async () => {
      try {
        let response = await teacherApi.listRegister(userInfo.accessToken);
        console.log(response);
        setRegisterList(response);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    fetchRegisterList();
  }, []);

  const handleAllotButton = () => {
    setShowProgressbar(true);
  };

  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="wrap-allot-intern">
          <div className="bt-allot-intern">
            <CustomButton
              buttonText={"Thực hiện phân công thực tập cho sinh viên"}
              onClick={() => setShowProgressbar(true)}
            />
            <ProgressBar
              show={showProgressbar}
              onHide={() => setShowProgressbar(false)}
            />
            <CustomButton
              onClick={() => {
                navigate("/teacher/allot-intern/result-intern");
              }}
              buttonText={"Xem kết quả phân công"}
            />
          </div>
          <p className="fw-bold mx-auto text-center fs-5">
            DANH SÁCH CÁC SINH VIÊN ĐÃ ĐĂNG KÝ
          </p>
          <Table striped bordered hover className="table-allot-intern">
            <thead>
              <tr>
                <th>STT</th>
                <th>MSV</th>
                <th className="name">Họ và tên</th>
                <th className="major">Ngành học</th>
                <th>CPA tích luỹ</th>
                <th>Chứng chỉ ngoại ngữ</th>
                <th>Nguyện vọng 1</th>
                <th>Nguyện vọng 2</th>
                <th>Nguyện vọng 3</th>
              </tr>
            </thead>
            <tbody>
              {registerList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td className="name-value">{item.name}</td>
                  <td>{item.field}</td>
                  <td>{item.cpa}</td>
                  <td>{item.cert}</td>
                  <td>{item.promised_positions[0][0]._id}</td>
                  <td>{item.promised_positions[0][1]._id}</td>
                  <td>{item.promised_positions[0][2]._id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ListRegister;
