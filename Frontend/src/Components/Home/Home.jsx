import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import MyNavBar from "../Common";
function Home(props) {
  return (
    <div className="landingPic">
         <MyNavBar/>
        <div className="heroImage">
          <div className="fontContainer">
            <p className="allrightFont">delika</p>
            <p className="kionaFont">STYLISH LIVING DOES NOT HAVE </p>
            <p className="kionaFont2">TO BE EXPENSIVE TO BE CLASSY, </p>
            <Button
              className="kionaFontBtn"
              href="/registration"
            >
              REGISTER
            </Button>{" "}
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
      </div>
    </div>
  );
}

export default Home;

//card demo
