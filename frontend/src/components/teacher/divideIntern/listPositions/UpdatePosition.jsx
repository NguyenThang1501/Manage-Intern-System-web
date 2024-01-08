import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../common/button/CustomButton";
import teacherApi from "../../../../api/teacherAPI";
import { useUser } from "../../../../context/UserContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import SideBar2 from "../../../common/sidebar/SideBar2";
import Container from "react-bootstrap/esm/Container";
import "./listpositions.css";

const UpdatePosition = (props) => {
  const { userInfo } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const updateData = location.state ? location.state.updateData : null;

  console.log(updateData);

  const [position, setPosition] = useState({
    name: "",
    business: "",
    capacity: "",
    require: "",
    cpa_required: "",
  });

  const handleButtonUpdate = async () => {
    try {
      const response = await teacherApi.updatePosition(
        userInfo.accessToken,
        position,
        updateData._id
      );
      console.log(response);
      alert("Đã sửa " + updateData._id);
      navigate("/teacher/allot-intern/list-positions");
    } catch (error) {
      console.log("Failed", error);
    }
  };

  return (
    <div>
      <SideBar2 />
      <Container>
        <Col className="update-position">
          <div className="title-cp">Sửa vị trí thực tập</div>
          <div className="line-form">
            <Form className="">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Tên vị trí (*)
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={updateData.name}
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
                  defaultValue={updateData.business}
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
                  defaultValue={updateData.capacity}
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
                  defaultValue={updateData.require}
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
                  defaultValue={updateData.cpa_required}
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
                handleButtonUpdate();
              }}
              className="add-positions"
              buttonText={"Cập nhật vị trí"}
            />
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default UpdatePosition;
