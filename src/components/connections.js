import React, { useState } from "react";
import LawyerSideConnections from "./lawyers_messages_sent.js";
import SurvivorSideConnections from "./survivor_messages_sent.js";
import SurvivorHeader from "./survivor_header.js";
import LawyerHeader from "./lawyer_header.js";
import { Grid } from "@material-ui/core";

export default function Connections(props) {
  const [lawyerProfile, setLawyerProfile] = useState([]);
  const [lawyerName, setLawyerName] = useState("name");
  const [lawyerImage, setLawyerImage] = useState("image");

  const [survivorProfile, setSurvivorProfile] = useState([]);
  const [survivorName, setSurvivorName] = useState("name");
  const [survivorImage, setSurvivorImage] = useState("image");

  const statuses = [
    "profile sent, awaiting response",
    "profile sent, awaiting response",
    "profile sent, awaiting response",
    "profile sent, awaiting response",
    "profile sent, awaiting response",
    "profile sent, awaiting response",
  ];

  const lawyerNames = [
    "Protima Pandey",
    "Amy Durrence",
    "Drew Harbur",
    "Michele Dauber",
  ];
  const lawyerPhotos = [
    "https://legaltalknetwork.com/wp-content/uploads/2019/08/0-4.jpg",
    "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
    "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
    "https://womensmediacenter.com/assets/site/profile-photos/michele-landis-dauber/_profilePhotoSquare/Dauber_Michele_Bio.jpg",
  ];
  const survivorNames = [
    "Sarah",
    "Taylor",
    "Julia",
    "Raven",
    "Cleopatra",
    "Melissa",
  ];
  const survivorPhotos = [
    "https://i.guim.co.uk/img/media/d0105731685e5b2b3daecf2fa00c9affaba832f1/0_0_2560_1536/master/2560.jpg?width=700&quality=85&auto=format&fit=max&s=6542f6e0d27c640c50459a8cf09941c4",
    "https://pbs.twimg.com/media/EYUEhvDXgAINxfT?format=png&name=small",
    "https://pbs.twimg.com/media/EYT23zZWAAEyGsJ?format=png&name=small",
    "https://pbs.twimg.com/media/EYS_8TLXsAAo8W9?format=png&name=small",
    "https://pbs.twimg.com/media/EYSJFcdWkAA5Lmu?format=png&name=small",
    "https://pbs.twimg.com/media/EYNa4qyXQAApT6i?format=png&name=small",
  ];
  const [viewProfile, setViewProfile] = useState(false);
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);

  function setStatus(index, message) {
    statuses[index] = message;
  }

  if (props.userDetails.isLawyer === true) {
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
        <LawyerSideConnections
          setSurvivorImage={setSurvivorImage}
          setSurvivorName={setSurvivorName}
          setSurvivorProfile={setSurvivorProfile}
          survivorName={survivorName}
          survivorImage={survivorImage}
          survivorProfile={survivorProfile}
          survivorPhotos={survivorPhotos}
          survivorNames={survivorNames}
          setStatus={setStatus}
          statuses={statuses}
          unsentSurvivors={props.unsentSurvivors}
          sentSurvivors={props.sentSurvivors}
          survivorIndex={props.survivorIndex}
          setSurvivorIndex={props.setSurvivorIndex}
          setUnsentSurvivors={props.setUnsentSurvivors}
          setSentSurvivors={props.setSentSurvivors}
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
          isConfirmScreen={isConfirmScreen}
          setIsConfirmScreen={setIsConfirmScreen}
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
        <SurvivorHeader
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
        <SurvivorSideConnections
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
          setLawyerImage={setLawyerImage}
          setLawyerName={setLawyerName}
          setLawyerProfile={setLawyerProfile}
          lawyerName={lawyerName}
          lawyerImage={lawyerImage}
          lawyerProfile={lawyerProfile}
          lawyerPhotos={lawyerPhotos}
          lawyerNames={lawyerNames}
          setStatus={setStatus}
          statuses={statuses}
          unsentLawyers={props.unsentLawyers}
          sentLawyers={props.sentLawyers}
          lawyerIndex={props.lawyerIndex}
          setLawyerIndex={props.setLawyerIndex}
          setUnsentLawyers={props.setUnsentLawyers}
          setSentLawyers={props.setSentLawyers}
          isConfirmScreen={isConfirmScreen}
          setIsConfirmScreen={setIsConfirmScreen}
          {...props}
        />
      </Grid>
    );
  }
}
