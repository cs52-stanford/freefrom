import React, { useState } from "react";
import LawyerHome from "./lawyer_home.js";
import LawyerResource from "./lawyer_resource.js";
import LawyerHeader from "./lawyer_header.js";
import LawyerSettings from "./lawyer_settings.js";

const LawyerMatches = (props) => {
  const [isHomeScreen, setIsHomeScreen] = useState(true);
  const [isResourceScreen, setIsResourceScreen] = useState(false);
  const [isSettingsScreen, setIsSettingsScreen] = useState(false);

  if (isHomeScreen === true) {
    return (
      <div className="lawyerhome">
        <LawyerHeader
          setIsHomeScreen={setIsHomeScreen}
          setIsResourceScreen={setIsResourceScreen}
          setIsSettingsScreen={setIsSettingsScreen}
        />
        <LawyerHome />
      </div>
    );
  }

  if (isResourceScreen === true) {
    return (
      <div className="lawyerresource">
        <LawyerHeader
          setIsHomeScreen={setIsHomeScreen}
          setIsResourceScreen={setIsResourceScreen}
          setIsSettingsScreen={setIsSettingsScreen}
        />
        <LawyerResource />
      </div>
    );
  }

  if (isSettingsScreen === true) {
    return (
      <div className="lawyersettings">
        <LawyerHeader
          setIsHomeScreen={setIsHomeScreen}
          setIsResourceScreen={setIsResourceScreen}
          setIsSettingsScreen={setIsSettingsScreen}
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
                setPhoto={props.setPhoto}
                photo={props.photo}
                setNumNotifications={props.setNumNotifications}
                numNotifications={props.numNotifications}
            ></LawyerSettings>
      </div>
    );
  }
}

export default LawyerMatches;
