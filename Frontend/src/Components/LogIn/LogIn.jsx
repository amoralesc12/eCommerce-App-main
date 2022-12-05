import React , { useState } from "react";
import "./LogIn.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import { login } from '../../services/users';
import {useHistory} from "react-router-dom";
import MyNavBar from "../Common";

function myLogIn(props) {
  return (

    <div className="landingPic">
      
      <Container className ="title">Log In</Container>
      <Container className = "background">
        
      <Form className="LogIn">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="enterEmail">Email Address</Form.Label>
          <Form.Control type="email"   className="emailBtn"/>
      
          <Form.Text className="text-muted">
                We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="enterPassword" >Password</Form.Label>
          <Form.Control type="password"  className="passwordBtn" />
          <Form.Text className="text-muted">
          Must have at least one uppercase letter, number, special character
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" className="submitButton">
          SUBMIT
        </Button>
        <p></p>  <p></p>  <p></p>  <p></p>  <p></p>
      </Form>
      </Container>
    </div>
  );
}

export default myLogIn;
