import React, { useState } from "react";

import "./Register.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import { register } from "../services/users";
import { useHistory } from "react-router-dom";

function Register(props) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});

  const history = useHistory();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    //validate
    const newErrors = findFormErrors();
    console.log("length", Object.keys(newErrors));
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("OK");
      // call to api
      register(form.name, form.email, form.password);

      // redirect to /home

      history.push("/login");
    }
  }

  function findFormErrors() {
    const newErrors = {};
    const { name, email, password, passwordValid } = form;

    console.log("form", form);
    if (!name && name !== "") {
      newErrors.name = "Name cannot be empty";
    }
    if (!email && email !== "") {
      newErrors.email = "Email cannot be empty";
    }
    // validate with regex
    if (!password && password !== "") {
      newErrors.password = "Password cannot be empty";
    }
    if (password !== passwordValid) {
      newErrors.passwordValid = "No coincide!";
    }
    // validate with regex
    return newErrors;
  }

  return (
    <div className="landingPic">
      <Container className="titleRegister">Register</Container>
      <Container className="registerBg">
        <Form className="Register" onSubmit={handleSubmit}>
          <Form.Label className="enterName">Name</Form.Label>
          <Form.Control
            aria-label="First name"
            className="username"
            placeholder="Enter Name"
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Text className="text-muted">
            Please enter your full-name.
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p></p>
            <Form.Label className="enterEmailRegister">
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              className="emailBtn"
              placeholder="Enter email"
              onChange={(e) => setField("email", e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>

            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="enterPassword">Password</Form.Label>
            <Form.Control
              type="password"
              className="passwordBtn"
              onChange={(e) => setField("password", e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              Must have at least one uppercase letter, number, special character
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="enterPassword">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              className="passwordBtn"
              onChange={(e) => setField("passwordValid", e.target.value)}
              isInvalid={!!errors.passwordValid}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              Please enter your password again
            </Form.Text>
          </Form.Group>
          <Alert variant="light" className="goToLogin">
            <Alert.Link href="/logIn">Already have an user?</Alert.Link>.
          </Alert>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="submitButtonRegister"
          >
            SUBMIT
          </Button>
          <p></p> <p></p> <p></p> <p></p> <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </Form>
      </Container>
    </div>
  );
}

export default Register;

