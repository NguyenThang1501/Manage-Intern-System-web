import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../common/button/CustomButton";
import "./studentReport.css";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";

const AddProject = () => {
  const [project, setProject] = useState();
  const [describe, setDescribe] = useState();
  const { userInfo } = useUser();

  const handleSubmitReport = async () => {
    const data = {
      project: project,
      describe: describe,
    };
    try {
      const response = await studentApi.submitProject(
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
                  Tên đề tài(*)
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="date"
                    onChange={(event) => setProject(event.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Mô tả (*)
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(event) => setDescribe(event.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>

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
