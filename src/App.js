import React, { useState } from "react";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import LawyerMatches from "./components/lawyer_matches.js";
import SurvivorHome from "./components/survivor_home.js";

import "./App.css";

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isLawyer, setIsLawyer] = useState(false);
  const [isSurvivor, setIsSurvivor] = useState(true);

  // account information
  const [name, setName] = useState("name");
  const [gender, setGender] = useState([]);
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("");

  // survivor profile information
  const [currentCounty, setCurrentCounty] = useState("-");
  const [financialCapability, setFinancialCapability] = useState("-");
  const [lastOccurred, setLastOccurred] = useState("-");
  const [abuseCounty, setAbuseCounty] = useState("-");
  const [weaponsInvolved, setWeaponsInvolved] = useState("-");
  const [emailNotifications, setEmailNotifications] = useState("-");
  const [extraInfo, setExtraInfo] = useState("-");
  const [color, setColor] = useState("-");

  // lawyer profile infomation
  const [practiceCounty, setPracticeCounty] = useState([]);
  const [experience, setExperience] = useState("-");
  const [compensationRequest, setCompensationRequest] = useState([]);
  const [photo, setPhoto] = useState("-");
  const [numNotifications, setNumNotifications] = useState(-1);

  if (isLogIn === true && isSurvivor === true) {
    return (
      <SurvivorHome
        setIsLogIn={setIsLogIn}
        setName={setName}
        setGender={setGender}
        setEmail={setEmail}
        setPassword={setPassword}
        setCurrentCounty={setCurrentCounty}
        setFinancialCapability={setFinancialCapability}
        setLastOccurred={setLastOccurred}
        setAbuseCounty={setAbuseCounty}
        setWeaponsInvolved={setWeaponsInvolved}
        setEmailNotifications={setEmailNotifications}
        setExtraInfo={setExtraInfo}
        setColor={setColor}
        name={name}
        gender={gender}
        email={email}
        password={password}
        currentCounty={currentCounty}
        financialCapability={financialCapability}
        lastOccurred={lastOccurred}
        abuseCounty={abuseCounty}
        weaponsInvolved={weaponsInvolved}
        emailNotifications={emailNotifications}
        extraInfo={extraInfo}
        color={color}
      />
    );
  }

  //if is lawyer, display lawyer homepage
  if (isLogIn === true && isLawyer === true) {
    return (
      <LawyerMatches
        setIsLogIn={setIsLogIn}
        setName={setName}
        setGender={setGender}
        setEmail={setEmail}
        setPassword={setPassword}
        name={name}
        gender={gender}
        email={email}
        password={password}
        setPracticeCounty={setPracticeCounty}
        practiceCounty={practiceCounty}
        experience={experience}
        setExperience={setExperience}
        setCompensationRequest={setCompensationRequest}
        compensationRequest={compensationRequest}
        setPhoto={setPhoto}
        photo={photo}
        setNumNotifications={setNumNotifications}
        numNotifications={numNotifications}
      />
    );
  }

  // if isSignIn is true, display sign in page
  if (isSignIn) {
    return (
      <div className="App">
        <div className="container">
          <SignIn
            setIsSignIn={setIsSignIn}
            setIsLogIn={setIsLogIn}
            setIsLawyer={setIsLawyer}
            setIsSurvivor={setIsSurvivor}
            isLogin={isLogIn}
            isLawyer={isLawyer}
            isSurvivor={isSurvivor}
          />
        </div>
      </div>
    );
  }

  // otherwise (if isSignIn is false), display sign up page
  return (
    <div className="App">
      <div className="container">
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
          setIsCurrentCounty={setCurrentCounty}
          financialCapability={financialCapability}
          setfinancialCapability={setFinancialCapability}
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
          color={color}
          setColor={setColor}
        />
      </div>
    </div>
  );
}

export default App;
