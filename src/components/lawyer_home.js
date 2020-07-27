import React from "react";
import "./lawyer_home.css";
import Container from "@material-ui/core/Container";
import Logo from "../logo-test.png";
import "./lawyer_home.css";
import SurvivorsMatched from "./lawyer-survivors_matched.js";

const LawyerHome = (props) => {
  return (
    <SurvivorsMatched
      viewProfile={props.viewProfile}
      setViewProfile={props.setViewProfile}
      setSurvivorImage={props.setSurvivorImage}
      setSurvivorName={props.setSurvivorName}
      setSurvivorProfile={props.setSurvivorProfile}
      survivorName={props.survivorName}
      survivorImage={props.survivorImage}
      survivorProfile={props.survivorProfile}
      isConfirmScreen={props.isConfirmScreen}
      setIsConfirmScreen={props.setIsConfirmScreen}
      survivorPhotos={props.survivorPhotos}
      survivorNames={props.survivorNames}
      sentSurvivors={props.sentSurvivors}
      setStatus={props.setStatus}
      statuses={props.statuses}
      setUnsentSurvivors={props.setUnsentSurvivors}
      unsentRequests={props.unsentRequests}
      setSentSurvivors={props.setSentSurvivors}
      sentSurvivors={props.sentSurvivors}
      survivorIndex={props.survivorIndex}
      setSurvivorIndex={props.setSurvivorIndex}
    />
  );
};
export default LawyerHome;
