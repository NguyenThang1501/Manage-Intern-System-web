import React, { useEffect, useState } from "react";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import teacherApi from "../../../../api/teacherAPI";
import { useUser } from "../../../../context/UserContext";

const ResultAllot = () => {
  const [result, setResult] = useState([]);
  const { userInfo } = useUser();

  useEffect(() => {
    const fetchResultIntern = async () => {
      try {
        let response = await teacherApi.getResultIntern(userInfo.accessToken);
        console.log(response);
        setResult(response);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    fetchResultIntern();
  }, []);

  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="result-table">
          <p className="fw-bold mx-auto text-center fs-5">
            KẾT QUẢ PHÂN CÔNG THỰC TẬP
          </p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Họ và tên</th>
                <th>Số điện thoại</th>
                <th>Chuyên ngành</th>
                <th>Tên vị trí</th>
                <th>Công ty</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.major}</td>
                  <td>{item.position}</td>
                  <td>{item.business}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ResultAllot;
