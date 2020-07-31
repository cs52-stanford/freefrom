import React, { useState } from "react";
import SurvivorMatches from "./survivor_matches.js";
import SurvivorConnections from "./survivor_messages_sent.js";
import SurvivorSettings from "./survivor_settings.js";
import SurvivorHeader from "./header.js";
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

  return (
    <Grid
      justify="flex-end"
      alignContent="space-between"
      className="lawyerhome"
    >
      <SurvivorHeader userDetails={props.userDetails} />
      <SurvivorMatches
        // viewProfile={viewProfile}
        // setViewProfile={setViewProfile}
        // setLawyerImage={setLawyerImage}
        // setLawyerName={setLawyerName}
        // setLawyerProfile={setLawyerProfile}
        // lawyerName={lawyerName}
        // lawyerImage={lawyerImage}
        // lawyerProfile={lawyerProfile}
        // isConfirmScreen={isConfirmScreen}
        // setIsConfirmScreen={setIsConfirmScreen}
        // lawyerPhotos={lawyerPhotos}
        // lawyerNames={lawyerNames}
        // //     unsentLawyers={unsentLawyers}
        // //     sentLawyers={sentLawyers}
        // setStatus={setStatus}
        // statuses={statuses}
        unsentRequests={props.unsentRequests}
      // sentLawyers={props.sentLawyers}
      // lawyerIndex={props.lawyerIndex}
      // setLawyerIndex={props.setLawyerIndex}
      // setUnsentLawyers={props.setUnsentLawyers}
      // setSentLawyers={props.setSentLawyers}
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
