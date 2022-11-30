
import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Navbar from './Components/Common/navbar';
import Card from './Components/Card/card';
/*

//componente propio de bootstrap
import Navbar from './Components/Common/navbar';
import Home from './Components/Home/Home';
*/



function App() {
    return (
      <div className="App">
        <div className="App-header">
        <Navbar/>
            <Container className="cardParent">

              <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </Container>
        
       
        </div>
      </div>
    );
  }



export default App;

