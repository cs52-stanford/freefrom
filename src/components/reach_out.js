import React from "react";
import SurvivorReachOut from "./survivor_profile.js";
import LawyerReachOut from "./lawyer_reach_out.js";

export default function ReachOut(props) {
    if (props.userDetails.isLawyer === true) {
        return (
            <SurvivorReachOut
                allSurvivors={props.allRequests}
                survivorId={props.userId}
                userDetails={props.userDetails}
                {...props} />
        );
    } else {
        return (
            <LawyerReachOut
                allLawyers={props.allRequests}
                lawyerId={props.userId}
                userDetails={props.userDetails}
                {...props} />
        );
    }
}