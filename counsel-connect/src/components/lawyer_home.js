import React from "react";
import LawyerHeader from "./lawyer_header.js";

const LawyerHome = (props) => {
  return (
    <LawyerHeader
      setIsHomeScreen={props.setIsHomeScreen}
      isHomeScreen={props.isHomeScreen}
    />
  );
};
export default LawyerHome;
