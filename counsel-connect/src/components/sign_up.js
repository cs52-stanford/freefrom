import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import "./sign_up.css";
import NavBar from "./sign_up_nav_bar.js";
import SurvivorForm from "./sign_up_form_survivor.js";
import LawyerForm from "./sign_up_form_lawyer.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { css } from "@emotion/core";

const themeA = createMuiTheme({
  root: {
    backgroundColor: "#e06d4f",
  },

  palette: {
    primary: {
      main: "#e06d4f",
    },
    secondary: {
      main: "#f7fff7",
    },
  },
});

const TypeCard = (props) => {
  return (
    <ThemeProvider theme={themeA} className="backgroundColor">
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
    </ThemeProvider>
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
    return (
      <LawyerForm
        setIsSignIn={props.setIsSignIn}
        name={props.name}
        setName={props.setName}
        gender={props.gender}
        setGender={props.setGender}
        email={props.email}
        setEmail={props.setEmail}
        password={props.password}
        setPassword={props.setPassword}
        practiceCounty={props.practiceCounty}
        setPracticeCounty={props.setPracticeCounty}
        experience={props.experience}
        setExperience={props.setExperience}
        compensationRequest={props.compensationRequest}
        setCompensationRequest={props.setCompensationRequest}
        photo={props.photo}
        setPhoto={props.setPhoto}
        numNotifications={props.numNotifications}
        setNumNotifications={props.setNumNotifications}
      />
    );
  }

  return (
    <SurvivorForm
      setIsSignIn={props.setIsSignIn}
      name={props.name}
      setName={props.setName}
      gender={props.gender}
      setGender={props.setGender}
      email={props.email}
      setEmail={props.setEmail}
      password={props.password}
      setPassword={props.setPassword}
      currentCounty={props.currentCounty}
      setCurrentCounty={props.setCurrentCounty}
      financialCapability={props.financialCapability}
      setFinancialCapability={props.setFinancialCapability}
      lastOccurred={props.lastOccurred}
      setLastOccurred={props.setLastOccurred}
      abuseCounty={props.abuseCounty}
      setAbuseCounty={props.setAbuseCounty}
      weaponsInvolved={props.weaponsInvolved}
      setWeaponsInvolved={props.setWeaponsInvolved}
      emailNotifications={props.emailNotifications}
      setEmailNotifications={props.setEmailNotifications}
      extraInfo={props.extraInfo}
      setExtraInfo={props.setExtraInfo}
    />
  );
}
