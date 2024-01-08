import React, { useState, useEffect } from "react";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import "./listpositions.css";
import "../../manageStudent/manastudent.css";
import CustomButton from "../../../common/button/CustomButton";
import Table from "react-bootstrap/esm/Table";
import SideBar2 from "../../../common/sidebar/SideBar2";
import AddPosition from "./AddPosition";
import Container from "react-bootstrap/esm/Container";
import commonAPI from "../../../../api/commonApi";
import { useUser } from "../../../../context/UserContext";
import axios from "axios";
import teacherApi from "../../../../api/teacherAPI";
import { useNavigate } from "react-router-dom";

const ListPositions = () => {
  const [add, setAdd] = useState(false);
  const { userInfo } = useUser();
  const [positions, setPositions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        let response = await commonAPI.getAllPositions(userInfo.accessToken);
        console.log(response);
        setPositions(response);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    fetchPositions();
  }, []);

  const handleUpdate = (item) => {
    navigate("/teacher/allot-intern/list-positions/update-position", {
      state: { updateData: item },
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await teacherApi.deletePosition(
        userInfo.accessToken,
        id
      );
      setPositions((prevPositions) =>
        prevPositions.filter((item) => item._id !== id)
      );

      console.log(response);

      alert("Đã xoá vị trí " + id);
    } catch (error) {
      console.log("Failed", error);
    }
  };

  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="wrap-positions-tb">
          <CustomButton
            onClick={() => setAdd(true)}
            className="add-positions"
            buttonText={"Thêm vị trí"}
          />

          <Table striped bordered hover className="list-positions-tb">
            <thead>
              <tr className="text-center">
                <th>STT</th>
                <th>Mã vị trí</th>
                <th>Tên vị trí</th>
                <th>Công ty</th>
                <th>Số lượng tuyển</th>
                <th>Yêu cầu</th>
                <th>Yêu cầu về GPA</th>
                <th>Thao tác</th>
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
                    <button
                      className="bt-infor-st"
                      onClick={() => handleUpdate(item)}
                    >
                      {" "}
                      <IoSettingsOutline className="icon-action-inf" />
                      Sửa
                    </button>
                    <button
                      className="bt-infor-st"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdDeleteForever className="icon-action-inf" />
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <AddPosition show={add} onHide={() => setAdd(false)} />
        </div>
      </Container>
    </div>
  );
};

export default ListPositions;
