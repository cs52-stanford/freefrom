import React from "react";
import LawyerHeader from "./lawyer_header.js";

const LawyerResource = (props) => {
  return (
    <LawyerHeader
      setIsHomeScreen={props.setIsHomeScreen}
      isHomeScreen={props.isHomeScreen}
    />
  );
};
export default LawyerResource;
