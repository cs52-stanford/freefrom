import React from "react";
import LawyerHeader from "./lawyer_header.js";

const LawyerResource = (props) => {
  return <LawyerHeader setIsHomeScreen={props.setIsHomeScreen} />;
};
export default LawyerResource;
