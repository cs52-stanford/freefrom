import React, { useState } from "react";
import LawyerHome from "./lawyer_matches.js";
import SurvivorHome from "./survivor_home.js";

export default function Home(props) {
  if (props.userDetails.isLawyer === true) {
    return (
      <LawyerHome
        unsentRequests={props.unsentRequests}
        sentSurvivors={props.sentSurvivors}
        survivorIndex={props.survivorIndex}
        setSurvivorIndex={props.setSurvivorIndex}
        setUnsentSurvivors={props.setUnsentSurvivors}
        setSentSurvivors={props.setSentSurvivors}
        {...props}
      />
    );
  } else {
    return (
      <SurvivorHome
        unsentRequests={props.unsentRequests}
        userDetails={props.userDetails}
      // sentLawyers={props.sentLawyers}
      // lawyerIndex={props.lawyerIndex}
      // setLawyerIndex={props.setLawyerIndex}
      // setUnsentLawyers={props.setUnsentLawyers}
      // setSentLawyers={props.setSentLawyers}
      />
    );
  }
}
