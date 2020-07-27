import React, { useState } from "react";
import LawyerSideConnections from "./lawyers_messages_sent.js";
import SurvivorSideConnections from "./survivor_messages_sent.js";
import SurvivorHeader from "./survivor_header.js";
import LawyerHeader from "./lawyer_header.js";
import { Grid } from "@material-ui/core";

export default function Connections(props) {
  if (props.userDetails.isLawyer === true) {
    return (
      <Grid
        justify="flex-end"
        alignContent="space-between"
        className="lawyerhome"
      >
        <LawyerHeader />
        <LawyerSideConnections
          allRequests={props.allRequests}
          sentSurvivors={props.sentSurvivors}
          survivorIndex={props.survivorIndex}
          setSurvivorIndex={props.setSurvivorIndex}
          setUnsentSurvivors={props.setUnsentSurvivors}
          setSentSurvivors={props.setSentSurvivors}
          {...props}
        />
      </Grid>
    );
  } else {
    return (
      <Grid
        justify="flex-end"
        alignContent="space-between"
        className="lawyerhome"
      >
        <SurvivorHeader />
        <SurvivorSideConnections
          allRequests={props.allRequests}
        />
      </Grid>
    );
  }
}
