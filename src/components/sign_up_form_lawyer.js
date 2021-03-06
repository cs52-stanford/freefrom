import React, { useState } from "react";
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
import ProfileCard from "./lawyer_profile_info_card.js";
import { Link, Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/storage";
import { signup, signin } from "../services/auth";
import { auth, db } from "../services/firebase";
import matcher from "./matcher.js";

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
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
  pText: {
    textDecoration: "underline",
    fontStyle: "oblique",
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
}));

function getSteps() {
  return ["Disclaimer", "Account Information", "Profile Information"];
}

export default function LawyerSignUpStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [cannotContinue, setCannotContinue] = useState(true);
  const [isLawyer, setIsLawyer] = React.useState(true);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      signup(email, password)
        .then(() => {
          var storageRef = firebase.storage().ref('photos/' + auth().currentUser.uid);

          const data = new FormData();
          data.append('file', photo);

          storageRef.put(photo);

          db.ref("users/" + auth().currentUser.uid).set({
            gender: gender,
            name: name,
            email: email,
            practiceCounty: practiceCounty,
            experience: experience,
            interest: interest,
            compensationRequest: compensationRequest,
            numNotifications: numNotifications,
            isLawyer: true,
            isSurvivor: false,
          });
          db.ref("users/" + auth().currentUser.uid).once("value").then(function (snapshot) {
            matcher(snapshot.val(), auth().currentUser.uid);
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setCannotContinue(true);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [name, setName] = React.useState("name");
  const [email, setEmail] = React.useState("email");
  const [gender, setGender] = React.useState([]);
  const [password, setPassword] = React.useState("");
  const [practiceCounty, setPracticeCounty] = React.useState([]);
  const [experience, setExperience] = React.useState("");
  const [interest, setInterest] = React.useState("");
  const [compensationRequest, setCompensationRequest] = React.useState([]);
  const [photo, setPhoto] = React.useState("");
  const [numNotifications, setNumNotifications] = React.useState("");

  return (
    <ThemeProvider theme={themeA}>
      <div className="background">
        <NavBar></NavBar>
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
                    Thank you for signing up for Counsel Connect! By joining our
                    platform, you are helping to grant survivors of domestic
                    abuse financial freedom from their harmdoers.
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
                  isLawyer={isLawyer}
                  name={name}
                  setName={setName}
                  gender={gender}
                  setGender={setGender}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  cannotContinue={cannotContinue}
                  setCannotContinue={setCannotContinue}
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

          <Step key={steps[2]}>
            <StepLabel>{steps[2]}</StepLabel>
            <StepContent>
              <Typography style={contentStyle}>
                <ProfileCard
                  practiceCounty={practiceCounty}
                  setPracticeCounty={setPracticeCounty}
                  experience={experience}
                  setExperience={setExperience}
                  interest={interest}
                  setInterest={setInterest}
                  compensationRequest={compensationRequest}
                  setCompensationRequest={setCompensationRequest}
                  photo={photo}
                  setPhoto={setPhoto}
                  numNotifications={numNotifications}
                  setNumNotifications={setNumNotifications}
                  cannotContinue={cannotContinue}
                  setCannotContinue={setCannotContinue}
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
          <div>
            <Typography align="center">
              Sign up complete! You'll be redirected to your home page momentarily.
            </Typography>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
