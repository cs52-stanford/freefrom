import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import "./sign_up.css";
import NavBar from "./sign_up_nav_bar.js";
import SurvivorForm from "./sign_up_form_survivor.js";
import LawyerForm from "./sign_up_form_lawyer.js";

const TypeCard = (props) => {
  return (
    <Container className="one" maxWidth="sm">
      <Container className="three" maxWidth="sm"></Container>
      <Container className="four" maxWidth="sm">
        <Container className="five" maxWidth="sm">
          <div>I am a:</div>

          <div className="seven">
            <div
              className="lawyerButton"
              onClick={function () {
                props.setIsFirstScreen(false);
                props.setIsLawyer(true);
              }}
            >
              LAWYER
            </div>
            <div
              className="survivorButton"
              onClick={function () {
                props.setIsFirstScreen(false);
                props.setIsLawyer(false);
              }}
            >
              SURVIVOR
            </div>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default function SignUp(props) {
  const [isFirstScreen, setIsFirstScreen] = useState(true);
  const [isLawyer, setIsLawyer] = useState(true);

  if (isFirstScreen) {
    return (
      <div className="screen">
        <NavBar setIsSignIn={props.setIsSignIn} />
        <TypeCard
          setIsFirstScreen={setIsFirstScreen}
          setIsLawyer={setIsLawyer}
        />
        <div className="footer"></div>
      </div>
    );
  }

  if (isLawyer) {
    return <LawyerForm />;
  }

  return <SurvivorForm />;
}
