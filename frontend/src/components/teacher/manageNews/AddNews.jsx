import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import SideBar2 from "../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
  const [position, setPosition] = useState("");
  const [capacities, setCapacities] = useState("");
  const [address, setAddress] = useState("");
  const [describe, setDescribe] = useState("");
  const [requirement, setRequirement] = useState("");
  const [profit, setProfit] = useState("");
  const [endTime, setEndtime] = useState("");

  const navigate = useNavigate();

  // const handleAddNews = async () => {
  //   try {
  //     let response = await businessApi.addNews(business, position, endTime, describe, requirement, profit, address);
  //     console.log(response);

  //   } catch (error) {
  //     console.log("Failed to login ", error);
  //   }
  // };

  return (
    <div>
      <SideBar2 />
      <Container>
        <div className="wrap-business-news">
          <Col sm={10} className="list-form">
            <div className="title-cp">Thêm tin tuyển dụng</div>
            <div className="line-form">
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    Vị trí thực tập (*)
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      type="text"
                      onChange={(event) => setPosition(event.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    Số lượng (*)
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      type="text"
                      onChange={(event) => setCapacities(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Form>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Nơi làm việc (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mô tả công việc (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(event) => setDescribe(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Yêu cầu (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(event) => setRequirement(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mức lương (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    rows={3}
                    onChange={(event) => setProfit(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Ngày đóng đơn (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(event) => setEndtime(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <CustomButton
                onClick={() => (
                  // handleAddNews,
                  alert("Thêm thành công"), navigate("/teacher/mana-news")
                )}
                className="add-positions"
                buttonText={"Thêm"}
              />
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default AddNews;
