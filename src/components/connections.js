import React, { useState } from "react";
import LawyerSideConnections from "./lawyer-survivors_matched.js";
import SurvivorSideConnections from "./survivor_messages_sent.js";
import SurvivorHeader from "./survivor_header.js";
import { Grid } from "@material-ui/core";

export default function Connections(props) {
  //  const [viewProfile, setViewProfile] = useState(false);
  const [lawyerProfile, setLawyerProfile] = useState([]);
  const [lawyerName, setLawyerName] = useState("name");
  const [lawyerImage, setLawyerImage] = useState("image");

  const statuses = ["new!", "new!", "new!", "new!", "new!", "new!"];

  const [unsentLawyers, setUnsentLawyers] = useState([0, 1, 2, 3, 4, 5]);
  const [sentLawyers, setSentLawyers] = useState([]);
  const [lawyerIndex, setLawyerIndex] = useState(0);

  const lawyerNames = [
    "RBG",
    "Amy",
    "Drew",
    "Elle Woods",
    "Mr. Generic",
    "Mrs. Generic",
  ];
  const lawyerPhotos = [
    "https://upload.wikimedia.org/wikipedia/commons/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg",
    "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
    "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
    "https://i.insider.com/5c40e230524147386364af33?width=750&format=jpeg&auto=webp",
    "https://media.gettyimages.com/photos/smiling-lawyer-sitting-at-desk-in-office-picture-id104821116?s=612x612",
    "https://www.thebalance.com/thmb/jCOulTG9w5WGoY6lZIHKqOQlY64=/3633x3633/smart/filters:no_upscale()/Gettywomanlawyer-5955ab903df78cdc296e8f7e.jpg",
  ];

  function setStatus(index, message) {
    statuses[index] = message;
  }

  if (props.userDetails.isLawyer === true) {
    return <LawyerSideConnections {...props} />;
  } else {
    return (
      <Grid
        justify="flex-end"
        alignContent="space-between"
        className="lawyerhome"
      >
        <SurvivorHeader
          viewProfile={props.viewProfile}
          setViewProfile={props.setViewProfile}
        />
        <SurvivorSideConnections
          viewProfile={props.viewProfile}
          setViewProfile={props.setViewProfile}
          setLawyerImage={setLawyerImage}
          setLawyerName={setLawyerName}
          setLawyerProfile={setLawyerProfile}
          lawyerName={lawyerName}
          lawyerImage={lawyerImage}
          lawyerProfile={lawyerProfile}
          lawyerPhotos={lawyerPhotos}
          lawyerNames={lawyerNames}
          unsentLawyers={unsentLawyers}
          sentLawyers={sentLawyers}
          setStatus={setStatus}
          statuses={statuses}
          unsentLawyers={props.unsentLawyers}
          sentLawyers={props.sentLawyers}
          lawyerIndex={props.lawyerIndex}
          setLawyerIndex={props.setLawyerIndex}
          setUnsentLawyers={props.setUnsentLawyers}
          setSentLawyers={props.setSentLawyers}
          {...props}
        />
      </Grid>
    );
  }
}
