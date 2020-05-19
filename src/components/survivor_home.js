import React, { useState } from "react";
import SurvivorMatches from "./survivor_matches.js";
import SurvivorConnections from "./survivor_messages_sent.js";
import SurvivorSettings from "./survivor_settings.js";
import SurvivorHeader from "./survivor_header.js";

const statuses = ["new!", "new!", "new!", "new!", "new!", "new!"];

const SurvivorHome = (props) => {
  const [isSurvivorMatches, setIsSurvivorMatches] = useState(true);
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const [isSurvivorConnections, setIsSurvivorConnections] = useState(false);
  const [isSurvivorSettings, setIsSurvivorSettings] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [lawyerProfile, setLawyerProfile] = useState([]);
  const [lawyerName, setLawyerName] = useState("name");
  const [lawyerImage, setLawyerImage] = useState("image");

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

  if (isSurvivorMatches === true) {
    return (
      <div className="lawyerhome">
        <SurvivorHeader
          setIsSurvivorMatches={setIsSurvivorMatches}
          setIsSurvivorConnections={setIsSurvivorConnections}
          setIsSurvivorSettings={setIsSurvivorSettings}
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
          unsentLawyers={unsentLawyers}
          sentLawyers={sentLawyers}
          setStatus={setStatus}
          statuses={statuses}
          setUnsentLawyers={setUnsentLawyers}
          unsentLawyers={unsentLawyers}
          setSentLawyers={setSentLawyers}
          sentLawyers={sentLawyers}
          lawyerIndex={lawyerIndex}
          setLawyerIndex={setLawyerIndex}
        ></SurvivorMatches>
      </div>
    );
  }
  if (isSurvivorConnections === true) {
    return (
      <div className="lawyerhome">
        <SurvivorHeader
          setIsSurvivorMatches={setIsSurvivorMatches}
          setIsSurvivorConnections={setIsSurvivorConnections}
          setIsSurvivorSettings={setIsSurvivorSettings}
          setIsLogIn={props.setIsLogIn}
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
        <SurvivorConnections
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
          unsentLawyers={unsentLawyers}
          sentLawyers={sentLawyers}
          setStatus={setStatus}
          statuses={statuses}
          setUnsentLawyers={setUnsentLawyers}
          unsentLawyers={unsentLawyers}
          setSentLawyers={setSentLawyers}
          sentLawyers={sentLawyers}
          lawyerIndex={lawyerIndex}
          setLawyerIndex={setLawyerIndex}
        ></SurvivorConnections>
      </div>
    );
  }
  if (isSurvivorSettings === true) {
    return (
      <div className="survivorhome">
        <SurvivorHeader
          setIsSurvivorMatches={setIsSurvivorMatches}
          setIsSurvivorConnections={setIsSurvivorConnections}
          setIsSurvivorSettings={setIsSurvivorSettings}
          setIsLogIn={props.setIsLogIn}
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
        <SurvivorSettings
          setName={props.setName}
          setGender={props.setGender}
          setEmail={props.setEmail}
          setPassword={props.setPassword}
          setCurrentCounty={props.setCurrentCounty}
          setFinancialCapability={props.setFinancialCapability}
          setLastOccurred={props.setLastOccurred}
          setAbuseCounty={props.setAbuseCounty}
          setWeaponsInvolved={props.setWeaponsInvolved}
          setEmailNotifications={props.setEmailNotifications}
          setExtraInfo={props.setExtraInfo}
          name={props.name}
          gender={props.gender}
          email={props.email}
          password={props.password}
          currentCounty={props.currentCounty}
          financialCapability={props.financialCapability}
          lastOccurred={props.lastOccurred}
          abuseCounty={props.abuseCounty}
          weaponsInvolved={props.weaponsInvolved}
          emailNotifications={props.emailNotifications}
          extraInfo={props.extraInfo}
        />
      </div>
    );
  }
};

export default SurvivorHome;
