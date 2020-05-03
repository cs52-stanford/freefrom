import React, { useState } from "react";
import LawyerHome from "./lawyer_home";
import LawyerResource from "./lawyer_resource";

const LawyerMatches = (props) => {
  const [isHomeScreen, setIsHomeScreen] = useState(true);

  if (isHomeScreen == true)
    return <LawyerHome setIsHomeScreen={setIsHomeScreen} />;
  else return <LawyerResource setIsHomeScreen={setIsHomeScreen} />;
};

export default LawyerMatches;
