import React, { Component } from 'react';
import SurvivorSettingsPanel from "./survivor_settings_panel";
import "./survivor.css"

const SurvivorSettings = (props) => {
    return (
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
    );
}
 

export default SurvivorSettings;
