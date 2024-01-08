import React, { useEffect, useState } from "react";
import SideBar from "../../common/sidebar/SideBar";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";

const TableList = () => {
  const { userInfo } = useUser();
  const [position, setPosition] = useState([]);

  useEffect(() => {
    const fetchStudentPosition = async () => {
      try {
        let response = await studentApi.getAspirationByID(userInfo.accessToken);
        console.log(response);
        setPosition(response.aspirations);
      } catch (error) {
        console.log("Failed to fetch student infor ", error);
      }
    };
    fetchStudentPosition();
  }, []);

  return (
    <div className="wrap-intern-positions">
      <Container>
        <div className="positions-table">
          <p className="fw-bold mx-auto text-center fs-5">
            Vị trí bạn đã đăng ký
          </p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã vị trí</th>
                <th>Tên vị trí</th>
                <th>Công ty</th>
              </tr>
            </thead>
            <tbody>
              {position.map((item, index) => (
                <tr key={item.position_id}>
                  <td>{index + 1}</td>
                  <td>{item.position_id}</td>
                  <td>{item.position_name}</td>
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

export default TableList;
