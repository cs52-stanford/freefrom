import React, { useState } from 'react';
import SurvivorMatches from "./survivor_matches.js";
import SurvivorResources from "./survivor_resources.js";
import SurvivorSettings from "./survivor_settings.js";
import SurvivorHeader from "./survivor_header.js";


const SurvivorHome = (props) => {
    const [isSurvivorMatches, setIsSurvivorMatches] = useState(true);
    const [isSurvivorResources, setIsSurvivorResources] = useState(false);
    const [isSurvivorSettings, setIsSurvivorSettings] = useState(false);

    if (isSurvivorMatches === true) {
        return (
            <div className="lawyerhome">
                <SurvivorHeader
                setIsSurvivorMatches={setIsSurvivorMatches}
                setIsSurvivorResources={setIsSurvivorResources}
                setIsSurvivorSettings={setIsSurvivorSettings}
                setIsLogIn={props.setIsLogIn}
                />
                <SurvivorMatches></SurvivorMatches>
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
                />
                <SurvivorResources></SurvivorResources>
            </div>
        );
    }
    if (isSurvivorSettings === true) {
        return (
            <div className="lawyerhome">
                <SurvivorHeader
                setIsSurvivorMatches={setIsSurvivorMatches}
                setIsSurvivorResources={setIsSurvivorResources}
                setIsSurvivorSettings={setIsSurvivorSettings}
                setIsLogIn={props.setIsLogIn}
                />
                <SurvivorSettings></SurvivorSettings>
            </div>
        );
    }
}

export default SurvivorHome;