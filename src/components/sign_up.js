import React, { useState, Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./sign_up.css";
import NavBar from "./sign_up_nav_bar.js";
import SurvivorForm from "./sign_up_form_survivor.js";
import LawyerForm from "./sign_up_form_lawyer.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { css } from "@emotion/core";
import { render } from "react-dom";
import {
  BrowserRouter,
  Switch,
  Link,
  withRouter,
  Redirect,
} from "react-router-dom";
import { signup } from "../services/auth";

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

export default function SignUp() {
  return (
    <Container className="one" maxWidth="sm">
      <Container className="three" maxWidth="sm"></Container>
      <Container className="four" maxWidth="sm">
        <Container className="five" maxWidth="sm">
          <Typography align="center" variant="h5">
            I am a:
          </Typography>
          <Switch>
            <div className="seven">
              <Link to="/sign_up_form_lawyer">
                <div className="lawyerButton">{"LAWYER"}</div>
              </Link>
              <Link to="/sign_up_form_survivor">
                <div className="survivorButton">{"SURVIVOR"}</div>
              </Link>
            </div>
          </Switch>
        </Container>
      </Container>
    </Container>
  );
}
