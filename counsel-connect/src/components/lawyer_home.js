import React, { Component } from "react";
import LawyerHeader from "./lawyer_header.js";

const LawyerHome = (props) => {
  return <LawyerHeader setIsHomeScreen={props.setIsHomeScreen} />;
};
export default LawyerHome;
