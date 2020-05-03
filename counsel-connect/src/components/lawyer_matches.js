import React, { Component } from "react";
import LawyerHome from "./lawyer_home.js";
import LawyerResource from "./lawyer_resource.js";

const LawyerMatches = (props) => {
  const [isHomeScreen, setIsHomeScreen] = useState(true);
  const [isResourceScreen, setIsResourceScreen] = useState(false);

  if (isHomeScreen == true) {
    return <LawyerHome setIsHomeScreen={setIsHomeScreen} />;
  }

  if (isResourceScreen == true) {
    return <LawyerResource setIsResourceScreen={setIsResourceScreen} />;
  }
};

export default LawyerMatches;
