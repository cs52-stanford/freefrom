import React from "react";
import LawyerSettingsPanel from "./lawyer_settings_panel";
import LawyerHeader from "./header.js";
import { Grid } from "@material-ui/core";

const LawyerSettings = (props) => {
  return (
    <Grid
      justify="flex-end"
      alignContent="space-between"
      className="lawyerhome"
    >
      <LawyerHeader
        setIsHomeScreen={props.setIsHomeScreen}
        setIsConnectionsScreen={props.setIsConnectionsScreen}
        setIsSettingsScreen={props.setIsSettingsScreen}
        setIsLogIn={props.setIsLogIn}
      />
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
    </Grid>
  );
};
export default LawyerSettings;
