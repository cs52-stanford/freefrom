import React, { useState } from "react";
import SurvivorMatches from "./survivor_matches.js";
import SurvivorConnections from "./survivor_messages_sent.js";
import SurvivorSettings from "./survivor_settings.js";
import SurvivorHeader from "./survivor_header.js";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const statuses = ["new!", "new!", "new!", "new!", "new!", "new!"];

const SurvivorHome = (props) => {
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [lawyerProfile, setLawyerProfile] = useState([]);
  const [lawyerName, setLawyerName] = useState("name");
  const [lawyerImage, setLawyerImage] = useState("image");

  //const [unsentLawyers, setUnsentLawyers] = useState([0, 1, 2, 3, 4, 5]);
  // const [sentLawyers, setSentLawyers] = useState([]);
  // const [lawyerIndex, setLawyerIndex] = useState(0);

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

  function setStatus(index, message) {
    statuses[index] = message;
  }

  return (
    <Grid
      justify="flex-end"
      alignContent="space-between"
      className="lawyerhome"
    >
      <SurvivorHeader
        setIsLogIn={props.setIsLogIn}
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
      />
      <SurvivorMatches
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
        setLawyerImage={setLawyerImage}
        setLawyerName={setLawyerName}
        setLawyerProfile={setLawyerProfile}
        lawyerName={lawyerName}
        lawyerImage={lawyerImage}
        lawyerProfile={lawyerProfile}
        isConfirmScreen={isConfirmScreen}
        setIsConfirmScreen={setIsConfirmScreen}
        lawyerPhotos={lawyerPhotos}
        lawyerNames={lawyerNames}
        //     unsentLawyers={unsentLawyers}
        //     sentLawyers={sentLawyers}
        setStatus={setStatus}
        statuses={statuses}
        unsentLawyers={props.unsentLawyers}
        sentLawyers={props.sentLawyers}
        lawyerIndex={props.lawyerIndex}
        setLawyerIndex={props.setLawyerIndex}
        setUnsentLawyers={props.setUnsentLawyers}
        setSentLawyers={props.setSentLawyers}
        {...props}
        //      setUnsentLawyers={setUnsentLawyers}
        //      unsentLawyers={unsentLawyers}
        //      setSentLawyers={setSentLawyers}
        //      sentLawyers={sentLawyers}
        //      lawyerIndex={lawyerIndex}
        //      setLawyerIndex={setLawyerIndex}
      ></SurvivorMatches>
    </Grid>
  );
};

export default SurvivorHome;
