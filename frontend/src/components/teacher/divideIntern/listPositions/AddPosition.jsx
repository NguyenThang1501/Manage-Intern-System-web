import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../common/button/CustomButton";
import Modal from "react-bootstrap/Modal";
import teacherApi from "../../../../api/teacherAPI";
import { useUser } from "../../../../context/UserContext";

const AddPosition = (props) => {
  const { userInfo } = useUser();

  const [position, setPosition] = useState({
    _id: "",
    name: "",
    business: "",
    capacity: "",
    require: "",
    cpa_required: "",
  });

  const handleButtonAdd = async () => {
    try {
      const response = await teacherApi.addPosition(
        userInfo.accessToken,
        position
      );
      alert("Thêm thành công");
    } catch (error) {
      console.log("Failed", error);
    }
  };

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
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setPosition({
                        ...position,
                        _id: e.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Tên vị trí (*)
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setPosition({
                        ...position,
                        name: e.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>
            </Form>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Công ty (*)
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setPosition({
                      ...position,
                      business: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Số lượng (*)
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setPosition({
                      ...position,
                      capacity: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setPosition({
                      ...position,
                      require: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                CPA tối thiểu (nếu có)
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setPosition({
                      ...position,
                      cpa_required: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>
            <CustomButton
              onClick={() => {
                props.onHide();

                handleButtonAdd();
              }}
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
