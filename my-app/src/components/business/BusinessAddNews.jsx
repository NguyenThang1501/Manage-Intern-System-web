import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../common/button/CustomButton";
import SideBar3 from "../common/sidebar/SideBar3";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";

const BusinessAddNews = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SideBar3 />
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
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    Số lượng (*)
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
              </Form>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Nơi làm việc (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mô tả công việc (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Yêu cầu (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control as="textarea" rows={3} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Ngày đóng đơn (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <CustomButton
                onClick={() => (
                  alert("Thêm thành công"), navigate("/business/manage-news")
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

export default BusinessAddNews;
