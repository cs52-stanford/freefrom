import React from "react";
import LawyerSettings from "./lawyer_settings.js";
import SurvivorSettings from "./survivor_settings.js";

export default function Settings(props) {
  if (props.userDetails.isLawyer === true) {
    return <LawyerSettings {...props} />;
  } else {
    return <SurvivorSettings {...props} />;
  }
}
