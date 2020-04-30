import React, { useState } from "react";
import logo from "./logo.svg";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import "./App.css";

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

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
        <SignUp setIsSignIn={setIsSignIn} />
      </div>
    </div>
  );
}

export default App;
