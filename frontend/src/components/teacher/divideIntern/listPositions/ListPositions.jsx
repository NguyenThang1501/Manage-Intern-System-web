import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import "./listpositions.css";
import "../../manageStudent/manastudent.css";
import CustomButton from "../../../common/button/CustomButton";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";
import AddPosition from "./AddPosition";
import Container from "react-bootstrap/esm/Container";

const ListPositions = () => {
  const [add, setAdd] = useState(false);
  const positions = [
    {
      _id: "123",
      name: "Data Analyst",
      business: "Viettel",
      capacity: "5",
      require: "123",
      cpa_required: "2.8",
    },
  ];

  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="wrap-positions-tb">
          <Col sm={14}>
            <CustomButton
              onClick={() => setAdd(true)}
              className="add-positions"
              buttonText={"Thêm vị trí"}
            />

            <Table striped bordered hover className="list-positions-tb">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã vị trí</th>
                  <th>Tên vị trí</th>
                  <th>Công ty</th>
                  <th>Số lượng tuyển</th>
                  <th>Yêu cầu</th>
                  <th>Yêu cầu về GPA</th>
                  <th></th>
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
                    <td>
                      <button className="bt-infor-st">
                        {" "}
                        <IoSettingsOutline className="icon-action-inf" />
                        Sửa
                      </button>
                      <button className="bt-infor-st">
                        <MdDeleteForever className="icon-action-inf" />
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <AddPosition show={add} onHide={() => setAdd(false)} />
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default ListPositions;
