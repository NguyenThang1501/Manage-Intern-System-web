import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const NewsCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://th.bing.com/th/id/R.713d881457fd59bbee4b903d1f891408?rik=KuMSfHSi%2bjTdxw&pid=ImgRaw&r=0"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
