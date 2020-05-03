import React, { Component } from "react";
import LawyerHome from "./lawyer_home.js";
import LawyerResource from "./lawyer_resource.js";

const [isHomeScreen, setIsHomeScreen] = useState(true);
const [isResourceScreen, setIsResourceScreen] = useState(false);

if (isHomeScreen == true) {
  <LawyerHome setIsHomeScreen={setIsHomeScreen} />;
}

if (isResourceScreen == true) {
  <LawyerResource setIsResourceScreen={setIsResourceScreen} />;
}

export default LawyerMatches;
