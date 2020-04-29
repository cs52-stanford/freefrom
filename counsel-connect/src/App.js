import React from "react";
import logo from "./logo.svg";
import SignIn from "./components/sign_in.js"
import "./App.css";

function App() {
  return (
    // test comment -Olivia 2.0
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hey Everyone!
        </a>
      </header>
    </div>
  );
}

export default App;
