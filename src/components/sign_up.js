import React, { useState, Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./sign_up.css";
import NavBar from "./sign_up_nav_bar.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import { render } from "react-dom";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { signout } from "../services/auth.js";

export default function SignUp() {
  signout();
  return (
    <div className="background">
      <NavBar></NavBar>
      <Container className="one" maxWidth="sm">
        <Container className="three" maxWidth="sm"></Container>
        <Container className="four" maxWidth="sm">
          <Container className="five" maxWidth="sm">
            <Typography align="center" variant="h5">
              I am a:
            </Typography>
            <div className="seven">
              <Link
                to="/sign_up_form_lawyer"
                style={{ textDecoration: "none" }}
              >
                <div className="lawyerButton">{"LAWYER"}</div>
              </Link>
              <Link
                to="/sign_up_form_survivor"
                style={{ textDecoration: "none" }}
              >
                <div className="survivorButton">{"SURVIVOR"}</div>
              </Link>
            </div>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
