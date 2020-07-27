import React, { useState } from "react";
import LawyerHome from "./lawyer_home.js";
import LawyerHeader from "./lawyer_header.js";
import ReachOut from "./survivor_profile";
import { Grid } from "@material-ui/core";

const statuses = ["new!", "new!", "new!", "new!", "new!"];

const LawyerMatches = (props) => {
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [survivorProfile, setSurvivorProfile] = useState([]);
  const [survivorName, setSurvivorName] = useState("name");
  const [survivorImage, setSurvivorImage] = useState("image");
  const [alreadySent, setAlreadySent] = useState(false);

  const survivorNames = [
    "Sarah",
    "Taylor",
    "Julia",
    "Raven",
    "Cleopatra",
  ];
  const survivorPhotos = [
    "https://i.guim.co.uk/img/media/d0105731685e5b2b3daecf2fa00c9affaba832f1/0_0_2560_1536/master/2560.jpg?width=700&quality=85&auto=format&fit=max&s=6542f6e0d27c640c50459a8cf09941c4",
    "https://pbs.twimg.com/media/EYUEhvDXgAINxfT?format=png&name=small",
    "https://pbs.twimg.com/media/EYT23zZWAAEyGsJ?format=png&name=small",
    "https://pbs.twimg.com/media/EYS_8TLXsAAo8W9?format=png&name=small",
    "https://pbs.twimg.com/media/EYSJFcdWkAA5Lmu?format=png&name=small",
  ];

  function setStatus(index, message) {
    statuses[index] = message;
  }

  if (!viewProfile) {
    return (
      <Grid
        justify="flex-end"
        alignContent="space-between"
        className="lawyerhome"
      >
        <LawyerHeader
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
        <LawyerHome
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
          setSurvivorImage={setSurvivorImage}
          setSurvivorName={setSurvivorName}
          setSurvivorProfile={setSurvivorProfile}
          survivorName={survivorName}
          survivorImage={survivorImage}
          survivorProfile={survivorProfile}
          isConfirmScreen={isConfirmScreen}
          setIsConfirmScreen={setIsConfirmScreen}
          survivorPhotos={survivorPhotos}
          survivorNames={survivorNames}
          unsentRequests={props.unsentRequests}
          sentSurvivors={props.sentSurvivors}
          setStatus={setStatus}
          statuses={statuses}
          setUnsentSurvivors={props.setUnsentSurvivors}
          setSentSurvivors={props.setSentSurvivors}
          survivorIndex={props.survivorIndex}
          setSurvivorIndex={props.setSurvivorIndex}
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
        <LawyerHeader
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
        <ReachOut
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
          setSurvivorImage={setSurvivorImage}
          setSurvivorName={setSurvivorName}
          setSurvivorProfile={setSurvivorProfile}
          survivorName={survivorName}
          survivorImage={survivorImage}
          survivorProfile={survivorProfile}
          isConfirmScreen={isConfirmScreen}
          setIsConfirmScreen={setIsConfirmScreen}
          survivorPhotos={survivorPhotos}
          survivorNames={survivorNames}
          setStatus={setStatus}
          statuses={statuses}
          setUnsentSurvivors={props.setUnsentSurvivors}
          unsentSurvivors={props.unsentSurvivors}
          setSentSurvivors={props.setSentSurvivors}
          sentSurvivors={props.sentSurvivors}
          survivorIndex={props.survivorIndex}
          setSurvivorIndex={props.setSurvivorIndex}
          alreadySent={alreadySent}
          setAlreadySent={setAlreadySent}
          {...props}
        />
      </Grid>
    );
  }
};

export default LawyerMatches;
