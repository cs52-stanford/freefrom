import React, { useState } from "react";
import LawyerHome from "./lawyer_home.js";
import LawyerConnections from "./lawyers_messages_sent.js";
import LawyerHeader from "./lawyer_header.js";
import LawyerSettings from "./lawyer_settings";
import ReachOut from "./lawyer_reach_out";

const statuses = ["new!", "new!", "new!", "new!", "new!", "new!"];

const LawyerMatches = (props) => {
  const [isHomeScreen, setIsHomeScreen] = useState(true);
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const [isConnectionsScreen, setIsConnectionsScreen] = useState(false);
  const [isSettingsScreen, setIsSettingsScreen] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [survivorProfile, setSurvivorProfile] = useState([]);
  const [survivorName, setSurvivorName] = useState("name");
  const [survivorImage, setSurvivorImage] = useState("image");

  const [unsentSurvivors, setUnsentSurvivors] = useState([0, 1, 2, 3, 4, 5]);
  const [sentSurvivors, setSentSurvivors] = useState([]);
  const [survivorIndex, setSurvivorIndex] = useState(0);

  const survivorNames = [
    "Alias 1",
    "Alias 2",
    "Alias 3",
    "Alias 4",
    "Alias 5",
    "Alias 6",
  ];
  const survivorPhotos = [
    "https://i.guim.co.uk/img/media/d0105731685e5b2b3daecf2fa00c9affaba832f1/0_0_2560_1536/master/2560.jpg?width=700&quality=85&auto=format&fit=max&s=6542f6e0d27c640c50459a8cf09941c4",
    "https://pbs.twimg.com/media/EYUEhvDXgAINxfT?format=png&name=small",
    "https://pbs.twimg.com/media/EYT23zZWAAEyGsJ?format=png&name=small",
    "https://pbs.twimg.com/media/EYS_8TLXsAAo8W9?format=png&name=small",
    "https://pbs.twimg.com/media/EYSJFcdWkAA5Lmu?format=png&name=small",
    "https://pbs.twimg.com/media/EYNa4qyXQAApT6i?format=png&name=small",
  ];

  function setStatus(index, message) {
    statuses[index] = message;
  }

  if (isHomeScreen === true) {
    if (viewProfile === false) {
      return (
        <div className="lawyerhome">
          <LawyerHeader
            setIsHomeScreen={setIsHomeScreen}
            isHomeScreen={isHomeScreen}
            setIsConnectionsScreen={setIsConnectionsScreen}
            isConnectionsScreen={isConnectionsScreen}
            setIsSettingsScreen={setIsSettingsScreen}
            isSettingsScreen={isSettingsScreen}
            setIsLogIn={props.setIsLogIn}
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
            unsentSurvivors={unsentSurvivors}
            sentSurvivors={sentSurvivors}
            setStatus={setStatus}
            statuses={statuses}
            setUnsentSurvivors={setUnsentSurvivors}
            unsentSurvivors={unsentSurvivors}
            setSentSurvivors={setSentSurvivors}
            sentSurvivors={sentSurvivors}
            survivorIndex={survivorIndex}
            setSurvivorIndex={setSurvivorIndex}
          />
        </div>
      );
    } else {
      return (
        <div className="lawyerhome">
          <LawyerHeader
            setIsHomeScreen={setIsHomeScreen}
            isHomeScreen={isHomeScreen}
            setIsConnectionsScreen={setIsConnectionsScreen}
            isConnectionsScreen={isConnectionsScreen}
            setIsSettingsScreen={setIsSettingsScreen}
            isSettingsScreen={isSettingsScreen}
            setIsLogIn={props.setIsLogIn}
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
            unsentSurvivors={unsentSurvivors}
            sentSurvivors={sentSurvivors}
            setStatus={setStatus}
            statuses={statuses}
            setUnsentSurvivors={setUnsentSurvivors}
            unsentSurvivors={unsentSurvivors}
            setSentSurvivors={setSentSurvivors}
            sentSurvivors={sentSurvivors}
            survivorIndex={survivorIndex}
            setSurvivorIndex={setSurvivorIndex}
          />
        </div>
      );
    }
  }

  if (isConnectionsScreen === true) {
    return (
      <div className="lawyerconnections">
        <LawyerHeader
          setIsHomeScreen={setIsHomeScreen}
          isHomeScreen={isHomeScreen}
          setIsConnectionsScreen={setIsConnectionsScreen}
          isConnectionsScreen={isConnectionsScreen}
          setIsSettingsScreen={setIsSettingsScreen}
          isSettingsScreen={isSettingsScreen}
          setIsLogIn={props.setIsLogIn}
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
        <LawyerConnections
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
          unsentSurvivors={unsentSurvivors}
          sentSurvivors={sentSurvivors}
          setStatus={setStatus}
          statuses={statuses}
          setUnsentSurvivors={setUnsentSurvivors}
          unsentSurvivors={unsentSurvivors}
          setSentSurvivors={setSentSurvivors}
          sentSurvivors={sentSurvivors}
          survivorIndex={survivorIndex}
          setSurvivorIndex={setSurvivorIndex}
        />
      </div>
    );
  }

  if (isSettingsScreen === true) {
    return (
      <div className="lawyersettings">
        <LawyerHeader
          setIsHomeScreen={setIsHomeScreen}
          isHomeScreen={isHomeScreen}
          setIsConnectionsScreen={setIsConnectionsScreen}
          isConnectionsScreen={isConnectionsScreen}
          setIsSettingsScreen={setIsSettingsScreen}
          isSettingsScreen={isSettingsScreen}
          setIsLogIn={props.setIsLogIn}
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
        <LawyerSettings
          setName={props.setName}
          setGender={props.setGender}
          setEmail={props.setEmail}
          setPassword={props.setPassword}
          name={props.name}
          gender={props.gender}
          email={props.email}
          password={props.password}
          setPracticeCounty={props.setPracticeCounty}
          practiceCounty={props.practiceCounty}
          experience={props.experience}
          setExperience={props.setExperience}
          setCompensationRequest={props.setCompensationRequest}
          compensationRequest={props.compensationRequest}
          setNumNotifications={props.setNumNotifications}
          numNotifications={props.numNotifications}
        />
      </div>
    );
  }
};

export default LawyerMatches;
