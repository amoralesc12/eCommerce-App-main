import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import Button from 'react-bootstrap/Button';


function MyNavBar(props) {

 

  return (

    <Navbar className="responsive" expand="lg">
    <Container  fluid>
      <Navbar.Brand className="title" href="/home">DELIKA.</Navbar.Brand>
      <Navbar.Toggle className="sm-auto" aria-controls="navbarScroll" />
     
        <Navbar.Collapse id="navbarScroll">
  
          <Nav
            className="extend"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
     
          <Nav.Link className="home" href="/home">HOME</Nav.Link>
          <Nav.Link className="about" href="/about">SHOP</Nav.Link>
          <Nav.Link className="contact" href="/contact">ABOUT</Nav.Link>
          <Button className="kionaFontButton" href="/logIn" variant="warning" >LOG IN</Button>{' '}
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

export default MyNavBar;