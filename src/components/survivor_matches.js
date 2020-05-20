import React, { useState } from "react";
import GridOfLawyers from "./survivor-lawyers_matched.js";
import SurvivorReachOut from "./survivor_reach_out.js";
import { css } from "@emotion/core";

const SurvivorMatches = (props) => {
  if (props.viewProfile === false) {
    return (
      <GridOfLawyers
        viewProfile={props.viewProfile}
        setViewProfile={props.setViewProfile}
        setLawyerImage={props.setLawyerImage}
        setLawyerName={props.setLawyerName}
        setLawyerProfile={props.setLawyerProfile}
        statuses={props.statuses}
        unsentLawyers={props.unsentLawyers}
        sentLawyers={props.sentLawyers}
        lawyerNames={props.lawyerNames}
        lawyerPhotos={props.lawyerPhotos}
        setStatus={props.setStatus}
        lawyerIndex={props.lawyerIndex}
        setLawyerIndex={props.setLawyerIndex}
        isConfirmScreen={props.isConfirmScreen}
        setIsConfirmScreen={props.setIsConfirmScreen}
        setUnsentLawyers={props.setUnsentLawyers}
        unsentLawyers={props.unsentLawyers}
        setSentLawyers={props.setSentLawyers}
        sentLawyers={props.sentLawyers}
      ></GridOfLawyers>
    );
  } else {
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          className={css`
            flex-direction: row;
            width: 45vw;
          `}
        ></div>
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
            statuses={props.statuses}
            unsentLawyers={props.unsentLawyers}
            sentLawyers={props.sentLawyers}
            lawyerNames={props.lawyerNames}
            lawyerPhotos={props.lawyerPhotos}
            setStatus={props.setStatus}
            lawyerIndex={props.lawyerIndex}
            isConfirmScreen={props.isConfirmScreen}
            setIsConfirmScreen={props.setIsConfirmScreen}
            setUnsentLawyers={props.setUnsentLawyers}
            unsentLawyers={props.unsentLawyers}
            setSentLawyers={props.setSentLawyers}
            sentLawyers={props.sentLawyers}
          ></SurvivorReachOut>
        </div>
        <div
          className={css`
            display: block;
          `}
        ></div>
      </div>
    );
  }
};

export default SurvivorMatches;
