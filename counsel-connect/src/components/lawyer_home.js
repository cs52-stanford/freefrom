import React, { Component } from "react";
import LawyerHeader from "./lawyer_header.js";

const LawyerHome = (props) => {
  return (
    <LawyerHeader
      setIsHomeScreen={props.setIsHomeScreen}
      setIsResourceScreen={props.setIsResourceScreen}
    />
  );
};
export default LawyerHome;
