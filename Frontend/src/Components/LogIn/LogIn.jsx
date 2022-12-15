import { React, useState } from "react";
import "./LogIn.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../services/users";
import { useHistory } from "react-router-dom";
//import MyNavBar from "../Common";

function MyLogIn(props) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [tokens, setTokens] = useState({});

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
      const { accessToken, refreshToken } = await login(
        form.email,
        form.password
      );

      // store accesstoken
      setTokens({ accessToken, refreshToken });
      console.log(tokens);

      // redirect to /home

      history.push("/home");
    }
  }

  function findFormErrors() {
    const newErrors = {};
    const { email, password } = form;

    console.log("form", form);
    if (!email && email !== "") {
      newErrors.email = "Email cannot be empty";
    }
    // validate with regex
    if (!password && password !== "") {
      newErrors.password = "Password cannot be empty";
    }
    // validate with regex
    return newErrors;
  }

  return (
    <div className="landingPic">
      <Container className="title">Log In</Container>
      <Container className="background">
        <Form className="LogIn" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="enterEmail">Email Address</Form.Label>
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
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit" className="submitButton">
            SUBMIT
          </Button>
          <p></p> <p></p> <p></p> <p></p> <p></p>
        </Form>
      </Container>
    </div>
  );
}
export default MyLogIn;
