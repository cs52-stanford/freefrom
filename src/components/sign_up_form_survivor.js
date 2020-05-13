import React from "react";
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
}));

function getSteps() {
  return ["Disclaimer", "Account Information", "Case Information"];
}

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [cannotContinue, setCannotContinue] = React.useState(true);
  const steps = getSteps();

  const handleNext = () => {
    setCannotContinue(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={themeA} className="backgroundColor">
      <div>
        <NavBar setIsSignIn={props.setIsSignIn} />
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={backgroundStyle}
        >
          <Step key={steps[0]}>
            <StepLabel>{steps[0]}</StepLabel>
            <StepContent>
              <Typography style={contentStyle}>
                <Container maxWidth="md">
                  <p>
                    As a survivor of domestic violence, you could be eligible
                    for money to cover some of the costs of the harm you
                    experienced. This platform is designed to match you with an
                    attorney best suited to help you. But first, answer a few
                    short questions to better understand your situation and
                    decide what lawyer is best for you.
                  </p>
                  <p>
                    This is an educational and informational tool and the
                    information contained within it does in no way constitute
                    legal advice. Any person who intends to use the information
                    contained herein in any way is solely responsible for
                    independently verifying the information and obtaining
                    independent legal or other expert advice if necessary.
                  </p>
                  <p>
                    By clicking next, you acknowledge that you have read and
                    agree to the terms and conditions provided.
                  </p>
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
                  name={props.name}
                  setName={props.setName}
                  gender={props.gender}
                  setGender={props.setGender}
                  email={props.email}
                  setEmail={props.setEmail}
                  password={props.password}
                  setPassword={props.setPassword}
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
                <CaseCard
                  cannotContinue={cannotContinue}
                  setCannotContinue={setCannotContinue}
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
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
