import React, { useState } from "react";
import logo from "./logo.svg";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import LawyerHome from "./components/lawyer_home.js";
import SurvivorHome from "./components/survivor_home.js"
import "./App.css";

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isLawyer, setIsLawyer] = useState(false);
  const [isSurvivor, setIsSurvivor] = useState(true);

  if (isLogIn === true && isSurvivor === true) {
    return <SurvivorHome 
        setIsLogIn={setIsLogIn}
    />;
  }

  //if is lawyer, display lawyer homepage
  if (isLogIn === true && isLawyer === true) {
    return <LawyerHome 
        setIsLogIn={setIsLogIn}
    />;
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
        <SignUp setIsSignIn={setIsSignIn} />
      </div>
    </div>
  );
}

export default App;
