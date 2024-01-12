import React, { useEffect, useState } from "react";
import SideBar from "../common/sidebar/SideBar";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import "./student.css";
import { useUser } from "../../context/UserContext";
import studentApi from "../../api/studentApi";

const Fqas = () => {
  const [result, setResult] = useState({});
  const { userInfo } = useUser();
  console.log(userInfo);
  useEffect(() => {
    const fetchResultAllot = async () => {
      try {
        let response = await studentApi.getResultIntern(userInfo.accessToken);
        console.log(response);
        let data = response;
        setResult(data.result);
      } catch (error) {
        console.log("Failed ", error);
      }
    };
    fetchResultAllot();
  }, []);

  return (
    <div>
      <SideBar />

      <Container>
        <div className="detail-report">
          <Col sm={10}>
            <div className="title-cp">Kết quả phân công thực tập của bạn</div>

            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th>Mã sinh viên:</th>
                  <td>{result._id}</td>
                </tr>
                <tr>
                  <th>Họ và tên:</th>
                  <td>{result.name}</td>
                </tr>
                <tr>
                  <th>Ngày sinh:</th>
                  <td>{result.birthday}</td>
                </tr>
                <tr>
                  <th>Chuyên ngành:</th>
                  <td>{result.major}</td>
                </tr>
                <tr>
                  <th>Công ty:</th>
                  <td>{result.business}</td>
                </tr>
                <tr>
                  <th>Vị trí thực tập:</th>
                  <td>{result.position}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Fqas;
