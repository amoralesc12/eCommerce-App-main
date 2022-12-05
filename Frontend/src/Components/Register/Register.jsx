import React from 'react';

import './Register.css';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert'

function Register(props) {

    return (
        <div className="landingPic">

      <Container className ="titleRegister">Register</Container>
      <Container className = "registerBg">
        
      <Form>
          <Form.Label className="enterName" >Name</Form.Label>
      <Form.Control aria-label="First name" className="username" />
      <Form.Text className="text-muted">
                Please enter your full-name.
          </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <p></p>
          <Form.Label className="enterEmailRegister">Email Address</Form.Label>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="enterPassword" >Confirm Password</Form.Label>
          <Form.Control type="password"  className="passwordBtn" />
          <Form.Text className="text-muted">
          Please enter your password again
          </Form.Text>
        </Form.Group>

        <Alert  variant="light" className="goToLogin">
          <Alert.Link href="/logIn">Already have an user?</Alert.Link>. 
        </Alert>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" className="submitButtonRegister">
          SUBMIT
        </Button>
        <p></p>  <p></p>  <p></p>  <p></p>  <p></p><p></p><p></p><p></p><p></p>
      </Form>
      </Container>
    </div>
    );
}

export default Register;