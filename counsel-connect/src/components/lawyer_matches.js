import React, { useState } from "react";
import LawyerHome from "./lawyer_home";
import LawyerResource from "./lawyer_resource";

const LawyerMatches = () => {
  const [isHomeScreen, setIsHomeScreen] = React.useState(true);

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
