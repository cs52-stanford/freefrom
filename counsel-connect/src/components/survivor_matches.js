import React, { useState } from "react";
import GridOfLawyers from "./survivor-lawyers_matched.js";
import SurvivorReachOut from "./survivor_reach_out.js";
import { css } from "@emotion/core";

const SurvivorMatches = (props) => {
  const [statuses, setStatuses] = useState(Array(9).fill(" new lawyer!"));

  const items = [
    {
      Items: [
        {
          Name: "RBG",
          Image:
            "https://api.oyez.org/sites/default/files/images/people/ruth_bader_ginsburg/ruth_bader_ginsburg.jpg",
          contentPosition: "left",
        },
        {
          Name: "Amy",
          Image:
            "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
          contentPosition: "middle",
        },
        {
          Name: "Drew",
          Image:
            "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
        },
      ],
    },
    {
      Items: [
        {
          Name: "Drew",
          Image:
            "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
          contentPosition: "middle",
        },
        {
          Name: "RBG",
          Image:
            "https://api.oyez.org/sites/default/files/images/people/ruth_bader_ginsburg/ruth_bader_ginsburg.jpg",
        },
        {
          Name: "Amy",
          Image:
            "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
        },
      ],
    },
    {
      Items: [
        {
          Name: "RBG",
          Image:
            "https://api.oyez.org/sites/default/files/images/people/ruth_bader_ginsburg/ruth_bader_ginsburg.jpg",
          contentPosition: "right",
        },
        {
          Name: "Drew",
          Image:
            "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
        },
        {
          Name: "Amy",
          Image:
            "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
        },
      ],
    },
  ];

  if (props.viewProfile === false) {
    return (
      <GridOfLawyers
        viewProfile={props.viewProfile}
        setViewProfile={props.setViewProfile}
        setLawyerImage={props.setLawyerImage}
        setLawyerName={props.setLawyerName}
        setLawyerProfile={props.setLawyerProfile}
        items={items}
        statuses={statuses}
        setStatuses={setStatuses}
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
            items={items}
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
