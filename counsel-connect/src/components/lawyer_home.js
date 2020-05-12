import React, { useState } from "react";
import SurvivorGrid from "./lawyer-survivors_matched.js";
import LawyerReachOut from "./lawyer_reach_out.js";
import { css } from "@emotion/core";

const statuses = ["new!", "new!", "new!", "new!", "new!", "new!"];

const LawyerHome = (props) => {
  const [survivorIndex, setSurvivorIndex] = React.useState(0);
  const cards = [1, 2, 3, 4, 5, 6];
  const survivorNames = [
    "Payton",
    "Lorena",
    "Sawyer",
    "Sami",
    "Charlie",
    "Alex",
  ];
  const survivorPhotos = [
    "https://upload.wikimedia.org/wikipedia/commons/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg",
    "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
    "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
    "https://i.insider.com/5c40e230524147386364af33?width=750&format=jpeg&auto=webp",
    "https://media.gettyimages.com/photos/smiling-lawyer-sitting-at-desk-in-office-picture-id104821116?s=612x612",
    "https://www.thebalance.com/thmb/jCOulTG9w5WGoY6lZIHKqOQlY64=/3633x3633/smart/filters:no_upscale()/Gettywomanlawyer-5955ab903df78cdc296e8f7e.jpg",
  ];

  function setStatus(index, message) {
    statuses[index] = message;
  }

  if (props.viewProfile === false) {
    console.log(statuses);
    return (
      <SurvivorGrid
        viewProfile={props.viewProfile}
        setViewProfile={props.setViewProfile}
        setSurvivorImage={props.setSurvivorImage}
        setSurvivorName={props.setSurvivorName}
        setSurvivorProfile={props.setSurvivorProfile}
        statuses={statuses}
        cards={cards}
        survivorNames={survivorNames}
        survivorPhotos={survivorPhotos}
        setStatus={setStatus}
        survivorIndex={survivorIndex}
        setSurvivorIndex={setSurvivorIndex}
      ></SurvivorGrid>
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
          <LawyerReachOut
            viewProfile={props.viewProfile}
            setViewProfile={props.setViewProfile}
            setSurvivorImage={props.setSurvivorImage}
            setSurvivorName={props.setSurvivorName}
            setSurvivorProfile={props.setSurvivorProfile}
            survivorName={props.survivorName}
            survivorImage={props.survivorImage}
            survivorProfile={props.survivorProfile}
            statuses={statuses}
            cards={cards}
            survivorNames={survivorNames}
            survivorPhotos={survivorPhotos}
            setStatus={setStatus}
            survivorIndex={survivorIndex}
          ></LawyerReachOut>
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
export default LawyerHome;
