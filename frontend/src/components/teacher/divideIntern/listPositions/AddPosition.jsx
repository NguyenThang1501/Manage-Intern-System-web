import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../common/button/CustomButton";
import Modal from "react-bootstrap/Modal";

const AddPosition = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <Col>
          <div className="title-cp">Thêm vị trí thực tập</div>
          <div className="line-form">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mã vị trí (*)
                </Form.Label>
                <Col sm={2}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Tên vị trí (*)
                </Form.Label>
                <Col sm={4}>
                  <Form.Select defaultValue="">
                    <option>1</option>
                    <option>2</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Form>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Công ty (*)
              </Form.Label>
              <Col sm={10}>
                <Form.Select defaultValue="">
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Số lượng (*)
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
                CPA tối thiểu (nếu có)
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <CustomButton
              onClick={props.onHide}
              className="add-positions"
              buttonText={"Thêm vị trí"}
            />
          </div>
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default AddPosition;
