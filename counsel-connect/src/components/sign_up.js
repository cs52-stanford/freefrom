import React, { useState } from "react";
import { css } from "@emotion/core";
import NavBar from "./sign_up_nav_bar.js";
import SurvivorForm from "./sign_up_form_survivor.js";
import LawyerForm from "./sign_up_form_lawyer.js";

export default function SignUp(props) {
  return <NavBar setIsSignIn={props.setIsSignIn} />;
}
