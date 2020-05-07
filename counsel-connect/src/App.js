import React, { useState } from "react";
import logo from "./logo.svg";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import "./App.css";

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
<<<<<<< Updated upstream
=======
  const [isLogIn, setIsLogIn] = useState(false);
  const [isLawyer, setIsLawyer] = useState(false);
  const [isSurvivor, setIsSurvivor] = useState(true);

  // account information
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // survivor profile information
  const [currentCounty, setCurrentCounty] = React.useState("-");
  const [financialCapability, setFinancialCapability] = React.useState("-");
  const [lastOccurred, setLastOccurred] = React.useState("-");
  const [abuseCounty, setAbuseCounty] = React.useState("-");
  const [weaponsInvolved, setWeaponsInvolved] = React.useState("-");
  const [emailNotifications, setEmailNotifications] = React.useState("-");
  const [extraInfo, setExtraInfo] = React.useState("-");

  // lawyer profile infomation
  const [practiceCounty, setPracticeCounty] = React.useState("-");
  const [experience, setExperience] = React.useState("-");
  const [compensationRequest, setCompensationRequest] = React.useState("-");
  const [photo, setPhoto] = React.useState("-");
  const [numNotifications, setNumNotifications] = React.useState(-1);

  if (isLogIn === true && isSurvivor === true) {
    return <SurvivorHome setIsLogIn={setIsLogIn} />;
  }

  //if is lawyer, display lawyer homepage
  if (isLogIn === true && isLawyer === true) {
    return <LawyerMatches setIsLogIn={setIsLogIn} />;
  }
>>>>>>> Stashed changes

  // if isSignIn is true, display sign in page
  if (isSignIn) {
    return (
      <div className="App">
        <div className="container">
          <SignIn setIsSignIn={setIsSignIn} />
        </div>
      </div>
    );
  }

  // otherwise (if isSignIn is false), display sign up page
  return (
    <div className="App">
      <div className="container">
<<<<<<< Updated upstream
        <SignUp setIsSignIn={setIsSignIn} />
=======
        <SignUp
          setIsSignIn={setIsSignIn}
          name={name}
          setName={setName}
          gender={gender}
          setGender={setGender}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          currentCounty={currentCounty}
          setCurrentCounty={setCurrentCounty}
          financialCapability={financialCapability}
          setFinancialCapability={setFinancialCapability}
          lastOccurred={lastOccurred}
          setLastOccurred={setLastOccurred}
          abuseCounty={abuseCounty}
          setAbuseCounty={setAbuseCounty}
          weaponsInvolved={weaponsInvolved}
          setWeaponsInvolved={setWeaponsInvolved}
          emailNotifications={emailNotifications}
          setEmailNotifications={setEmailNotifications}
          extraInfo={extraInfo}
          setExtraInfo={setExtraInfo}
          practiceCounty={practiceCounty}
          setPracticeCounty={setPracticeCounty}
          experience={experience}
          setExperience={setExperience}
          compensationRequest={compensationRequest}
          setCompensationRequest={setCompensationRequest}
          photo={photo}
          setPhoto={setPhoto}
          numNotifications={numNotifications}
          setNumNotifications={setNumNotifications}
        />
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;
