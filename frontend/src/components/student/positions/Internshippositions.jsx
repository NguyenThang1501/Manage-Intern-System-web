import React, { useEffect, useState } from "react";
import "./position.css";
import SideBar from "../../common/sidebar/SideBar";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import commonAPI from "../../../api/commonApi";
import { useUser } from "../../../context/UserContext";

const Internshippositions = () => {
  const { userInfo } = useUser();
  const [positions, setPositions] = useState([]);

  console.log(userInfo);
  useEffect(() => {
    const fetchPotitions = async () => {
      try {
        let response = await commonAPI.getAllPositions(userInfo.accessToken);
        console.log(response);
        setPositions(response);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    fetchPotitions();
  }, [userInfo]);
  return (
    <div className="wrap-intern-positions">
      <SideBar />
      <Container>
        <div className="positions-table">
          <div>
            <p className="fw-bold mx-auto text-center fs-5">
              Chi tiết các vị trí thực tập
            </p>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã vị trí</th>
                <th>Tên vị trí</th>
                <th>Công ty</th>
                <th>Số lượng tuyển</th>
                <th>Yêu cầu</th>
                <th>Yêu cầu về GPA</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.business}</td>
                  <td>{item.capacity}</td>
                  <td>{item.require}</td>
                  <td>{item.cpa_required}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Internshippositions;
