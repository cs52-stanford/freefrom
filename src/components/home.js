import React, { useState } from "react";
import LawyerHome from "./lawyer_matches.js";
import SurvivorHome from "./survivor_home.js";

export default function Home(props) {
  console.log("rendering home1");
  console.log(props);
  console.log("rendering home2");
  if (props.userDetails.isLawyer === true) {
    return <LawyerHome {...props} />;
  } else {
    return (
      <SurvivorHome
        unsentLawyers={props.unsentLawyers}
        sentLawyers={props.sentLawyers}
        lawyerIndex={props.lawyerIndex}
        setLawyerIndex={props.setLawyerIndex}
        setUnsentLawyers={props.setUnsentLawyers}
        setSentLawyers={props.setSentLawyers}
        {...props}
      />
    );
  }
}
