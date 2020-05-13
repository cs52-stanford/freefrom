import React, { useState } from 'react';
import SurvivorMatches from "./survivor_matches.js";
import SurvivorResources from "./survivor_resources.js";
import SurvivorSettings from "./survivor_settings.js";
import SurvivorHeader from "./survivor_header.js";


const SurvivorHome = (props) => {
    const [isSurvivorMatches, setIsSurvivorMatches] = useState(true);
    const [isSurvivorResources, setIsSurvivorResources] = useState(false);
    const [isSurvivorSettings, setIsSurvivorSettings] = useState(false);
    const [viewProfile, setViewProfile] = useState(false);
    const [lawyerProfile, setLawyerProfile] = useState([]);
    const [lawyerName, setLawyerName] = useState("name");
    const [lawyerImage, setLawyerImage] = useState("image");

    if (isSurvivorMatches === true) {
        return (
            <div className="lawyerhome">
                <SurvivorHeader
                setIsSurvivorMatches={setIsSurvivorMatches}
                setIsSurvivorResources={setIsSurvivorResources}
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
                ></SurvivorMatches>
            </div>
        );
    }
    if (isSurvivorResources === true) {
        return (
            <div className="lawyerhome">
                <SurvivorHeader
                setIsSurvivorMatches={setIsSurvivorMatches}
                setIsSurvivorResources={setIsSurvivorResources}
                setIsSurvivorSettings={setIsSurvivorSettings}
                setIsLogIn={props.setIsLogIn}
                viewProfile={viewProfile}
                setViewProfile={setViewProfile}
                />
                <SurvivorResources></SurvivorResources>
            </div>
        );
    }
    if (isSurvivorSettings === true) {
        return (
            <div className="survivorhome">
                <SurvivorHeader
                setIsSurvivorMatches={setIsSurvivorMatches}
                setIsSurvivorResources={setIsSurvivorResources}
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
}

export default SurvivorHome;