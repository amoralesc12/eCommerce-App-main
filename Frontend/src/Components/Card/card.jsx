import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import React from "react";
import "./card.css";

//aqui hacemos el codigo para que sea dinamico

function myCard(props) {
  return (
    <div>
    
      <Card className="cardChild">
   
        <Card.Img variant="top" src="holder.js/100px180" />

        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="text">
            Some quick example text to build on the card title and make up the
            bulk.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    
      </Card>
    </div>
  );
}

export default myCard;
