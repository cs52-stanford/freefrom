import React, { useState, Component, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import "./sign_up.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import { render } from "react-dom";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { auth, db } from "../services/firebase";
import { signout } from "../services/auth.js";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

let isOpen = false;

const handleClick = () => {
  // setOpen(true);
  isOpen = true;
};

const handleClose = () => {
  // setOpen(false);
  // setIsOpen(false);
  isOpen = false;
};

function handleSend(email) {
  // const [open, setOpen] = React.useState(false);

  auth().sendPasswordResetEmail(email).then(function () {
    console.log("before handleClick, isOpen = ", isOpen);
    handleClick();
    console.log("after handleClick, isOpen = ", isOpen);
  }).catch(function (error) {
    // An error happened.
    return;
  });

}

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <ThemeProvider theme={themeA}>
      <div className="background">
        <Container className="forgot-password" maxWidth="sm">
          <Container className="four" maxWidth="sm">
            <Container className="five" maxWidth="sm">
              <Typography align="center" variant="h5" paragraph onClick={() => console.log(isOpen)}>
                Forgot your password?
              </Typography>
              <Typography align="center" variant="h6">
                Enter your email address and we'll send you a link to reset your password
              </Typography>
              <div className="seven">
                <TextField
                  required
                  id="outlined-required"
                  label={"Email address"}
                  variant="outlined"
                  className="spacing"
                  margin="normal"
                  onChange={handleEmailChange}
                  autoFocus />
              </div>
              <div className="seven">
                <Link
                  to="/sign_in"
                  style={{ textDecoration: "none" }}
                >
                  <div className="lawyerButton">
                    Back
                  </div>
                </Link>
                <div
                  className="survivorButton"
                  onClick={() => {
                    handleSend(email);
                    setButtonClicked(true);
                  }}
                >
                  Send
                </div>
                {buttonClicked && <Snackbar open={true} autoHideDuration={6000} onClose={handleClose()}>
                  <Alert onClose={handleClose()} severity="success">
                    If the email you inputted is in our system, you should receive an email with a link to reset your password.
                  </Alert>
                </Snackbar>}
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    </ThemeProvider>
  );
}
