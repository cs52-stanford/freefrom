import React, { Component } from "react";
import SurvivorSettingsPanel from "./survivor_settings_panel";
import SurvivorHeader from "./header.js";
import { Grid } from "@material-ui/core";
import "./survivor.css";

const SurvivorSettings = (props) => {
  return (
    <Grid
      justify="flex-end"
      alignContent="space-between"
      className="lawyerhome"
    >
      <SurvivorHeader
        setIsSurvivorMatches={props.setIsSurvivorMatches}
        setIsSurvivorConnections={props.setIsSurvivorConnections}
        setIsSurvivorSettings={props.setIsSurvivorSettings}
        setIsLogIn={props.setIsLogIn}
        viewProfile={props.viewProfile}
        setViewProfile={props.setViewProfile}
        userDetails={props.userDetails}
      />
      <SurvivorSettingsPanel
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
      ></SurvivorSettingsPanel>
    </Grid>
  );
};

export default SurvivorSettings;
