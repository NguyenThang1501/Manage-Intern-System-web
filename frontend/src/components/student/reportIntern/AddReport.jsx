import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import Container from "react-bootstrap/esm/Container";
import "./studentReport.css";

const AddReport = () => {
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [work, setWork] = useState();
  const [process, setProcess] = useState();

  return (
    <div>
      <Container>
        <div className="wrap-table-add">
          <Col sm={12}>
            <div className="title-st-report"></div>
            <div className="line-form">
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Thời gian(*)
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      onChange={(event) => setTimeStart(event.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Công việc được giao (*)
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={(event) => setWork(event.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Form>

              <Form.Group as={Row} className="mb-5">
                <Form.Label column sm={4}>
                  Mức độ hoàn thành (*)
                </Form.Label>
                <Col sm={8}>
                  <Form.Select defaultValue="">
                    <option>1</option>
                    <option>2</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <CustomButton className="add-positions" buttonText={"Thêm"} />
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default AddReport;
