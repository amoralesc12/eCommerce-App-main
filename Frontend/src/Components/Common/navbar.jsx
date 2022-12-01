import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import Button from 'react-bootstrap/Button';
function myNavBar(props) {
  
  return (


    <Navbar className="responsive" expand="lg">
    <Container  fluid>
      <Navbar.Brand className="title" href="#">Delika.</Navbar.Brand>
      <Navbar.Collapse id="navbarScroll">
      
        <Nav
          className="extend"
          navbarScroll
        >
          
           
          <Nav.Link className="home" href="/home">Home</Nav.Link>
          <Nav.Link className="about" href="/about">About</Nav.Link>
          <Nav.Link className="contact" href="/contact">Contact</Nav.Link>
          <Button className="kionaFontButton" variant="outline-warning">Log In</Button>{' '}
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
  /*
    <Navbar expand="lg">
      <Container className="topPadding">
        <Navbar.Brand  href="#home">Delika.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       
      </Container>
    </Navbar>*/
  );
}

export default myNavBar;
