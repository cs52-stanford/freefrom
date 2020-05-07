import React from "react";
import LawyerRotatingCarousel from "./survivor-lawyers_matched.js";
import SurvivorReachOut from "./survivor_reach_out.js";
import { css } from "@emotion/core";


const SurvivorMatches = (props) => {
    if (props.viewProfile === false) {
        return (
            <LawyerRotatingCarousel
                viewProfile={props.viewProfile}
                setViewProfile={props.setViewProfile}
                setLawyerImage={props.setLawyerImage}
                setLawyerName={props.setLawyerName}
                setLawyerProfile={props.setLawyerProfile}
            ></LawyerRotatingCarousel>
            );
    }
    else {
        return (
            <div className={css`
            display: flex;
            align-items: center;
            justify-content: center;
        `}
        >
                <div className={css`
                flex-direction: row;
                width: 45vw;
            `}>
                </div>
                <div>
                <SurvivorReachOut
                        viewProfile={props.viewProfile}
                        setViewProfile={props.setViewProfile}
                        setLawyerImage={props.setLawyerImage}
                        setLawyerName={props.setLawyerName}
                        setLawyerProfile={props.setLawyerProfile}
                        lawyerName={props.lawyerName}
                        lawyerImage={props.lawyerImage}
                        lawyerProfile={props.lawyerProfile}
                ></SurvivorReachOut>
                </div>
                <div className={css`
                display: block;
        `}>
            </div>
            </div>
        )
    }
}
 
export default SurvivorMatches;