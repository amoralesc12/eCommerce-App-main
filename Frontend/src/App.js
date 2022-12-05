import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MyNavBar from "./Components/Common";
import Home from "./Components/Home";
// import Cats from "./Components/Cats";
import MyLogin from "./Components/LogIn";
import myCard from "./Components/Card";
import Register from "./Components/Register";

export default function App(props) {
  console.log('a')
  return (

//     <div className="landingPic">
//   <Navbar className="nav"/>
//   <div className="cardParent">
//      <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
//      </div>
//    </div>
//  );
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <MyLogin />
            </Route>
            <Route path="/registration">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

//card demo

