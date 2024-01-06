import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import "./studentReport.css";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";

const AddReport = () => {
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [work, setWork] = useState();
  const [process, setProcess] = useState();
  const { userInfo } = useUser();

  const handleSubmitReport = async () => {
    const data = {
      report: {
        time: timeStart,
        work: work,
        progress: process,
      },
    };
    try {
      const response = await studentApi.submitReport(
        userInfo.accessToken,
        data
      );
      console.log(response);
    } catch (error) {
      console.log("Failed", error);
    }
  };

  return (
    <div>
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
                    type="date"
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
                <Form.Control
                  type="text"
                  onChange={(event) => setProcess(event.target.value)}
                />
              </Col>
            </Form.Group>

            <CustomButton
              className="add-positions"
              onClick={handleSubmitReport}
              buttonText={"Thêm"}
            />
          </div>
        </Col>
      </div>
    </div>
  );
};

export default AddReport;
