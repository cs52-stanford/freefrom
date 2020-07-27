import React, { useState } from "react";
import GridOfLawyers from "./survivor-lawyers_matched.js";
import SurvivorReachOut from "./lawyer_profile.js";
import { css } from "@emotion/core";

const SurvivorMatches = (props) => {
  const [alreadySent, setIsAlreadySent] = useState(false);
  return (
    <GridOfLawyers unsentRequests={props.unsentRequests} />
  );
  // } else {
  //   return (
  //     <div
  //       className={css`
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //       `}
  //     >
  //       <div
  //         className={css`
  //           flex-direction: row;
  //           width: 45vw;
  //         `}
  //       ></div>
  //       <div>
  //         <SurvivorReachOut
  //           viewProfile={props.viewProfile}
  //           setViewProfile={props.setViewProfile}
  //           setLawyerImage={props.setLawyerImage}
  //           setLawyerName={props.setLawyerName}
  //           setLawyerProfile={props.setLawyerProfile}
  //           lawyerName={props.lawyerName}
  //           lawyerImage={props.lawyerImage}
  //           lawyerProfile={props.lawyerProfile}
  //           statuses={props.statuses}
  //           lawyerNames={props.lawyerNames}
  //           lawyerPhotos={props.lawyerPhotos}
  //           setStatus={props.setStatus}
  //           isConfirmScreen={props.isConfirmScreen}
  //           setIsConfirmScreen={props.setIsConfirmScreen}
  //           unsentLawyers={props.unsentLawyers}
  //           sentLawyers={props.sentLawyers}
  //           lawyerIndex={props.lawyerIndex}
  //           setLawyerIndex={props.setLawyerIndex}
  //           setUnsentLawyers={props.setUnsentLawyers}
  //           setSentLawyers={props.setSentLawyers}
  //           alreadySent={alreadySent}
  //           {...props}
  //         ></SurvivorReachOut>
  //       </div>
  //       <div
  //         className={css`
  //           display: block;
  //         `}
  //       ></div>
  //     </div>
  //   );
  // }
};

export default SurvivorMatches;
