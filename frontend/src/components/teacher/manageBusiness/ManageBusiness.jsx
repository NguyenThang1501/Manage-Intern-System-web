import React from "react";
import { Link } from "react-router-dom";
import "./manabusiness.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar2 from "../../common/sidebar/SideBar2";
import CustomButton from "../../common/button/CustomButton";
import { NavLink } from "react-router-dom";
import BusinessInfor from "./BusinessInfor";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

const ManageBusiness = () => {
  const cards = [
    {
      id: 1,
      title: "Viettel",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      title: "FPT",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      title: "vin",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];

  return (
    <div className="">
      <SideBar2 />
      <Container>
        <Row xs={1} md={2} className="g-4 card-business">
          {cards.map((card) => (
            <Col key={Card.id}>
              <Card className="card-business-body">
                <Link
                  to="/teacher/mana-business/business-infor"
                  className="card-business-title"
                >
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageBusiness;
