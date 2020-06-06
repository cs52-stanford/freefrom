import React, { useState } from "react";
import LawyerHome from "./lawyer_matches.js";
import SurvivorHome from "./survivor_home.js";

export default function Home(props){
    if(props.userDetails.isLawyer === true){
        return(
            <LawyerHome {...props}/>
        )
    } else {
        return(
            <SurvivorHome {...props}/>
        )
    }
}