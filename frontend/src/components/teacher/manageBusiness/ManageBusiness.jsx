import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./manabusiness.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar2 from "../../common/sidebar/SideBar2";
import CustomButton from "../../common/button/CustomButton";
import { NavLink } from "react-router-dom";
import BusinessInfor from "./BusinessInfor";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useUser } from "../../../context/UserContext";
import teacherApi from "../../../api/teacherAPI";

const ManageBusiness = () => {
  const { userInfo } = useUser();
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  console.log(userInfo);
  useEffect(() => {
    const fetchCardInfor = async () => {
      try {
        let response = await teacherApi.getBusinessNewsCard(
          userInfo.accessToken
        );
        console.log(response);
        let data = response;
        setCards(data);
      } catch (error) {
        console.log("Failed to fetch card infor ", error);
      }
    };
    fetchCardInfor();
  }, []);

  const handleClick = (id) => {
    navigate("/teacher/mana-business/business-infor", {
      state: { businessID: id },
    });
  };

  return (
    <div className="">
      <SideBar2 />
      <Container>
        <Row xs={1} md={2} className="g-4 card-business">
          {cards.map((card) => (
            <Col key={card.website}>
              <Card
                className="card-business-body"
                onClick={() => handleClick(card.id)}
              >
                <Card.Body>
                  <Card.Title>{card.name}</Card.Title>
                  <Card.Text>{card.hotline}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageBusiness;
