import React from "react";
import "./App.css";
import Navbar from "./Components/Common/navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from './Components/Card/card';
/*

//componente propio de bootstrap
import Navbar from './Components/Common/navbar';
import Home from './Components/Home/Home';import Container from "react-bootstrap/Container";import Card from './Components/Card/card';
*/

function App() {
  return (
    
     <div className="landingPic">
    <Navbar className="nav"/>
       <div className="heroImage">
         <p className="allrightFont">delika</p>
         <p className="kionaFont">Stylish living does not have </p>
         <p className="kionaFont2">to be expensive to be classy. </p>
       <Button className="kionaFontBtn" variant="outline-warning">
           Register
        </Button>{" "}
      </div>
      </div>
  );
}

export default App;



//card demo
  //   return (
    
  //     <div className="landingPic">
  //   <Navbar className="nav"/>
  //   <div className="cardParent">
  //      <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
  //      </div>
  //    </div>
  //  );