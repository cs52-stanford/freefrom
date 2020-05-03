import React, { Component } from "react";
import LawyerHeader from "./lawyer_header.js";

const LawyerResource = (props) => {
  return (
    <LawyerHeader
      setIsResourceScreen={props.setIsResourceScreen}
      setIsHomeScreen={props.setIsHomeScreen}
    />
  );
};
export default LawyerResource;
