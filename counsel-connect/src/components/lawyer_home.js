import React from "react";
import "./lawyer_home.css";
import Container from "@material-ui/core/Container";
import Logo from "../logo-test.png";
import "./lawyer_home.css";

const LawyerHome = (props) => {
  return (
    <Container className="screen">
      <div className="introtext">
        <p>
          Your profile is set up! Check your email for new matches with clients.
        </p>
      </div>
      <div className="starttext">
        <p> You've matched with...</p>
      </div>
      <div className="middlerow">
        <img className="counter" src={Logo}></img>
        <p className="number">7</p>
      </div>
      <div className="endtext">
        <p>...Potential clients.</p>
      </div>
    </Container>
  );
};
export default LawyerHome;
