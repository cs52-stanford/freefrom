import React from "react";
import SurvivorProfile from "./survivor_profile.js";
import LawyerProfile from "./lawyer_profile.js";

export default function Profile(props) {
    if (props.userDetails.isLawyer === true) {
        return (
            <SurvivorProfile
                allSurvivors={props.allRequests}
                survivorId={props.userId}
                {...props} />
        );
    } else {
        return (
            <LawyerProfile
                allLawyers={props.allRequests}
                lawyerId={props.userId}
                {...props} />
        );
    }
}
