import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomButton from "../common/button/CustomButton";
import SideBar3 from "../common/sidebar/SideBar3";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import businessApi from "../../api/businessAPI";

const BusinessAddNews = () => {
  const [newsInfor, setNewsInfor] = useState({
    position: "",
    endTime: "",
    require: "",
    profit: "",
    address: "",
    daily_time: "",
    describe: "",
  });
  const { userInfo } = useUser();

  const navigate = useNavigate();

  const handleAddNews = async () => {
    console.log(newsInfor);
    console.log(userInfo.accessToken);
    try {
      let response = await businessApi.addNews(userInfo.accessToken, newsInfor);
      console.log(response);
      alert("Thêm thành công");
      navigate("/business/manage-news");
    } catch (error) {
      console.log("Failed ", error);
    }
  };

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
                    <Form.Control
                      type="text"
                      onChange={(event) =>
                        setNewsInfor({
                          ...newsInfor,
                          position: event.target.value,
                        })
                      }
                    />
                  </Col>
                </Form.Group>
              </Form>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Mô tả công việc (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(event) =>
                      setNewsInfor({
                        ...newsInfor,
                        describe: event.target.value,
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
                    onChange={(event) =>
                      setNewsInfor({
                        ...newsInfor,
                        require: event.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Quyền lợi (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    rows={3}
                    onChange={(event) =>
                      setNewsInfor({ ...newsInfor, profit: event.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Địa điểm làm việc (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(event) =>
                      setNewsInfor({
                        ...newsInfor,
                        address: event.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Thời gian làm việc (*)
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    onChange={(event) =>
                      setNewsInfor({
                        ...newsInfor,
                        daily_time: event.target.value,
                      })
                    }
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
                    onChange={(event) =>
                      setNewsInfor({
                        ...newsInfor,
                        endTime: event.target.value,
                      })
                    }
                  />
                </Col>
              </Form.Group>
              <CustomButton
                onClick={() => handleAddNews()}
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
