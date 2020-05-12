import React from "react";
import LawyerSettingsPanel from "./lawyer_settings_panel";


const LawyerSettings = (props) => {
  return (
      <LawyerSettingsPanel
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
         ></LawyerSettingsPanel>
  );
};
export default LawyerSettings;
