import React, { useState } from "react";
import LawyerHome from "./lawyer_home.js";
import LawyerResource from "./lawyer_resource.js";

const LawyerMatches = () => {
  const [isHomeScreen, setIsHomeScreen] = useState(true);

  if (isHomeScreen == true)
    return (
      <LawyerHome
        setIsHomeScreen={setIsHomeScreen}
        isHomeScreen={isHomeScreen}
      />
    );
  else
    return (
      <LawyerResource
        setIsHomeScreen={setIsHomeScreen}
        isHomeScreen={isHomeScreen}
      />
    );
};

export default LawyerMatches;
