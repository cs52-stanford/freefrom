import React, { useState, useEffect } from "react";
import "./sign_up.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavBar from "./sign_up_nav_bar.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import DemographicsCard from "./make_account_card.js";
import CaseCard from "./case_info_card.js";
import { signup, signin } from "../services/auth";
import { auth, db } from "../services/firebase";

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

const backgroundStyle = {
  backgroundColor: "#f7fff7",
};

const contentStyle = {
  fontSize: 18,
  fontFamily: "roboto",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  center: {
    textAlign: "center",
  },
  pText: {
    textDecoration: "underline",
    fontStyle: "oblique",
  },
}));

function getSteps() {
  return ["Disclaimer", "Account Information", "Case Information"];
}

export default function SurvivorSignUpStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [cannotContinue, setCannotContinue] = useState(true);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      signup(email, password)
          .then(() => {
            db.ref("users/" + auth().currentUser.uid).set({
              gender: gender,
              name: name,
              email: email,
              currentCounty: currentCounty,
              financialCapability: financialCapability,
              lastOccurred: lastOccurred,
              abuseCounty: abuseCounty,
              weaponsInvolved: weaponsInvolved,
              emailNotifications: emailNotifications,
              extraInfo: extraInfo,
              color: color,
              isLawyer: false,
              isSurvivor: true,
            });
            // figure out photo
          })
          .catch(function (error) {
            console.error(error);
          });
    }
    setCannotContinue(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState([]);
  const [password, setPassword] = React.useState("");
  const [currentCounty, setCurrentCounty] = React.useState("");
  const [financialCapability, setFinancialCapability] = React.useState("");
  const [lastOccurred, setLastOccurred] = React.useState("");
  const [abuseCounty, setAbuseCounty] = React.useState("");
  const [weaponsInvolved, setWeaponsInvolved] = React.useState("");
  const [emailNotifications, setEmailNotifications] = React.useState("");
  const [extraInfo, setExtraInfo] = React.useState("");
  const [color, setColor] = React.useState("");

  return (
    <ThemeProvider theme={themeA} className="backgroundColor">
      <div className="background">
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={backgroundStyle}
          className={classes.center}
        >
          <Step key={steps[0]}>
            <StepLabel>{steps[0]}</StepLabel>
            <StepContent>
              <Typography style={contentStyle}>
                <Container maxWidth="md">
                  <Typography paragraph>
                    As a survivor of domestic violence, you could be eligible
                    for money to cover some of the costs of the harm you
                    experienced. This platform is designed to match you with an
                    attorney best suited to help you. But first, answer a few
                    short questions to better understand your situation and
                    decide what lawyer is best for you.
                  </Typography>
                  <Typography paragraph className={classes.pText}>
                    Please note that this platform is currently only for
                    California residents.
                  </Typography>
                  <Typography paragraph>
                    This is an educational and informational tool and the
                    information contained within it does in no way constitute
                    legal advice. Any person who intends to use the information
                    contained herein in any way is solely responsible for
                    independently verifying the information and obtaining
                    independent legal or other expert advice if necessary.
                  </Typography>
                  <Typography paragraph>
                    By clicking next, you acknowledge that you have read and
                    agree to the terms and conditions provided.
                  </Typography>
                </Container>
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>

          <Step key={steps[1]}>
            <StepLabel>{steps[1]}</StepLabel>
            <StepContent>
              <Typography style={contentStyle}>
                <DemographicsCard
                  cannotContinue={cannotContinue}
                  setCannotContinue={setCannotContinue}
                  name={name}
                  setName={setName}
                  gender={gender}
                  setGender={setGender}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={function () {
                      handleNext();
                    }}
                    className={classes.button}
                    disabled={cannotContinue}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>

          <Step key={steps[2]}>
            <StepLabel>{steps[2]}</StepLabel>
            <StepContent>
              <Typography style={contentStyle}>
                <CaseCard
                  cannotContinue={cannotContinue}
                  setCannotContinue={setCannotContinue}
                  currentCounty={currentCounty}
                  setCurrentCounty={setCurrentCounty}
                  financialCapability={financialCapability}
                  setFinancialCapability={setFinancialCapability}
                  lastOccurred={lastOccurred}
                  setLastOccurred={setLastOccurred}
                  abuseCounty={abuseCounty}
                  setAbuseCounty={setAbuseCounty}
                  weaponsInvolved={weaponsInvolved}
                  setWeaponsInvolved={setWeaponsInvolved}
                  emailNotifications={emailNotifications}
                  setEmailNotifications={setEmailNotifications}
                  extraInfo={extraInfo}
                  setExtraInfo={setExtraInfo}
                  color={color}
                  setColor={setColor}
                />
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={cannotContinue}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        </Stepper>
        {activeStep === steps.length && (
          <div style={backgroundStyle}>
            <Typography align="center">
              Sign up complete! Return to the home page to sign in.
            </Typography>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
