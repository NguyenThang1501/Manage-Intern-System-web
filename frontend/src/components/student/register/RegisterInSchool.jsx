import React, { useState, useEffect } from "react";
import SideBar from "../../common/sidebar/SideBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CustomButton from "../../common/button/CustomButton";
import TableList from "./TableList";
import "./register.css";
import commonAPI from "../../../api/commonApi";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";

const RegisterInschool = () => {
  const { userInfo } = useUser();
  const [showTable, setShowTable] = useState(false);

  const [error, setError] = useState();

  const [allPositions, setAllPositions] = useState([]);
  const [studentAspiration, setStudentAspiration] = useState({
    NV1: "",
    NV2: "",
    NV3: "",
  });

  const [aspiration, setAspiration] = useState([
    { _id: "" },
    { _id: "" },
    { _id: "" },
  ]);

  useEffect(() => {
    const fetchPotitions = async () => {
      try {
        let response = await commonAPI.getAllPositions(userInfo.accessToken);
        console.log(response);

        setAllPositions(response);
      } catch (error) {
        console.log("Failed to fetch positions infor ", error);
        setError("Chưa đến thời gian đăng ký");
      }
    };
    fetchPotitions();
  }, []);

  const handleButtonClick = async () => {
    setShowTable(true);
    console.log(studentAspiration);
    const data = {
      promised_positions: [
        { _id: studentAspiration.NV1 },
        { _id: studentAspiration.NV2 },
        { _id: studentAspiration.NV3 },
      ],
    };

    try {
      const response = await studentApi.submitAspiration(
        userInfo.accessToken,
        data
      );
      console.log(response);
    } catch (error) {
      console.log("Failed", error);
    }
  };

  useEffect(() => {
    const fetchPotitionByID = async () => {
      try {
        let response = await studentApi.getAspirationByID(userInfo.accessToken);
        console.log(response);
        let data = response.aspirations;
        setAspiration(data);
      } catch (error) {
        console.log("Failed to fetch aspirations infor ", error);
      }
    };
    fetchPotitionByID();
  }, []);

  return (
    <div>
      <SideBar />
      <Container>
        <div className="nv-page">
          {error ? (
            <p>{error}</p>
          ) : (
            <Col sm={10} className="list-form">
              <div className="title-cp">Đăng ký nguyện vọng</div>
              <div className="line-form">
                <Form>
                  <Form.Group as={Row} className="mb-5">
                    <Form.Label column sm={4}>
                      Nguyện vọng 1 (*)
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Select
                        defaultValue={aspiration[0]._id}
                        onChange={(e) =>
                          setStudentAspiration({
                            ...studentAspiration,
                            NV1: e.target.value,
                          })
                        }
                      >
                        {allPositions.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item._id}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-5">
                    <Form.Label column sm={4}>
                      Nguyện vọng 2 (*)
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Select
                        defaultValue={aspiration[1]._id}
                        onChange={(e) =>
                          setStudentAspiration({
                            ...studentAspiration,
                            NV2: e.target.value,
                          })
                        }
                      >
                        {allPositions.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item._id}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-5">
                    <Form.Label column sm={4}>
                      Nguyện vọng 3 (*)
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Select
                        defaultValue={aspiration[2]._id}
                        onChange={(e) =>
                          setStudentAspiration({
                            ...studentAspiration,
                            NV3: e.target.value,
                          })
                        }
                      >
                        {allPositions.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item._id}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Form>

                <CustomButton
                  buttonText={"Ghi nhận"}
                  onClick={handleButtonClick}
                />
              </div>
            </Col>
          )}
        </div>

        <div className="table-list">{showTable && <TableList />}</div>
      </Container>
    </div>
  );
};

export default RegisterInschool;
