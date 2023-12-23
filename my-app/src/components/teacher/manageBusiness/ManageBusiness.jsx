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

const ManageBusiness = () => {
  return (
    <SideBar2>
      <div className="card-business">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="card-business-body">
                <Link
                  to="/teacher/mana-business/business-infor"
                  className="card-business-title"
                >
                  <Card.Body>
                    <Card.Title>Viettel</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </SideBar2>
  );
};

export default ManageBusiness;
