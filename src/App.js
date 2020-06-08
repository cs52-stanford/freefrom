import React, { Component } from "react";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import Home from "./components/home.js";
import Connections from "./components/connections.js";
import Settings from "./components/settings.js";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth, db } from "./services/firebase";
import LawyerSignUpStepper from "./components/sign_up_form_lawyer.js";
import SurvivorSignUpStepper from "./components/sign_up_form_survivor.js";
import ButtonAppBar from "./components/sign_up_nav_bar";

import "./App.css";
import { signout } from "./services/auth.js";
import LawyerMatches from "./components/lawyer_matches.js";

function PrivateRoute({
  component: Component,
  authenticated,
  // next 3 lines for demo
  unsentLawyers,
  unsentSurvivors,
  sentLawyers,
  sentSurvivors,
  lawyerIndex,
  survivorIndex,
  userDetails,
  setLawyerIndex,
  setUnsentLawyers,
  setSentLawyers,
  setSurvivorIndex,
  setUnsentSurvivors,
  setSentSurvivors,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component
            {...props}
            userDetails={userDetails}
            unsentLawyers={unsentLawyers}
            sentLawyers={sentLawyers}
            lawyerIndex={lawyerIndex}
            setLawyerIndex={setLawyerIndex}
            setUnsentLawyers={setUnsentLawyers}
            setSentLawyers={setSentLawyers}
            unsentSurvivors={unsentSurvivors}
            sentSurvivors={sentSurvivors}
            survivorIndex={survivorIndex}
            setSurvivorIndex={setSurvivorIndex}
            setUnsentSurvivors={setUnsentSurvivors}
            setSentSurvivors={setSentSurvivors}
          />
        ) : (
          <Redirect
            to={{ pathname: "/sign_in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      loading: true,
      userDetails: undefined,
      unsentLawyers: [0, 1, 2, 3, 4, 5],
      sentLawyers: [],
      lawyerIndex: 0,
      unsentSurvivors: [0, 1, 2, 3, 4, 5],
      sentSurvivors: [],
      survivorIndex: 0,
    };

    // this might not work
    this.setLawyerIndex = this.setLawyerIndex.bind(this);
    this.setUnsentLawyers = this.setUnsentLawyers.bind(this);
    this.setSentLawyers = this.setSentLawyers.bind(this);
    this.setSurvivorIndex = this.setSurvivorIndex.bind(this);
    this.setUnsentSurvivors = this.setUnsentSurvivors.bind(this);
    this.setSentSurvivors = this.setSentSurvivors.bind(this);
  }

  setLawyerIndex(num) {
    this.setState((state) => {
      return { lawyerIndex: num };
    });
  }

  setUnsentLawyers(arr) {
    this.setState((state) => {
      return { unsentLawyers: arr };
    });
  }

  setSentLawyers(arr) {
    this.setState((state) => {
      return { sentLawyers: arr };
    });
  }

  setSurvivorIndex(num) {
    this.setState((state) => {
      return { survivorIndex: num };
    });
  }

  setUnsentSurvivors(arr) {
    this.setState((state) => {
      return { unsentSurvivors: arr };
    });
  }

  setSentSurvivors(arr) {
    this.setState((state) => {
      return { sentSurvivors: arr };
    });
  }

  componentDidMount() {
    if (auth().currentUser) {
      db.ref("users/" + auth().currentUser.uid).on("value", (snapshot) => {
        this.setState({
          authenticated: true,
          loading: false,
          userDetails: snapshot.val(),
        });
      });
    }
    auth().onAuthStateChanged((user) => {
      if (user) {
        db.ref("users/" + user.uid).on("value", (snapshot) => {
          console.log("found the user!");
          console.log(snapshot.val());
          this.setState({
            authenticated: true,
            loading: false,
            userDetails: snapshot.val(),
          });
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
          userDetails: undefined,
        });
        db.ref().off();
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={SignIn}
            authenticated={this.state.authenticated}
          />
          <PublicRoute
            path="/sign_in"
            component={SignIn}
            authenticated={this.state.authenticated}
          />
          <PrivateRoute
            path="/home"
            authenticated={this.state.authenticated}
            component={Home}
            userDetails={this.state.userDetails}
            unsentLawyers={this.state.unsentLawyers}
            sentLawyers={this.state.sentLawyers}
            lawyerIndex={this.state.lawyerIndex}
            survivorIndex={this.state.survivorIndex}
            unsentSurvivors={this.state.unsentSurvivors}
            sentSurvivors={this.state.sentSurvivors}
            setLawyerIndex={this.setLawyerIndex}
            setUnsentLawyers={this.setUnsentLawyers}
            setSentLawyers={this.setSentLawyers}
            setSurvivorIndex={this.setSurvivorIndex}
            setUnsentSurvivors={this.setUnsentSurvivors}
            setSentSurvivors={this.setSentSurvivors}
          />
          <PrivateRoute
            path="/connections"
            authenticated={this.state.authenticated}
            component={Connections}
            userDetails={this.state.userDetails}
            unsentLawyers={this.state.unsentLawyers}
            sentLawyers={this.state.sentLawyers}
            lawyerIndex={this.state.lawyerIndex}
            survivorIndex={this.state.survivorIndex}
            unsentSurvivors={this.state.unsentSurvivors}
            sentSurvivors={this.state.sentSurvivors}
            setLawyerIndex={this.setLawyerIndex}
            setUnsentLawyers={this.setUnsentLawyers}
            setSentLawyers={this.setSentLawyers}
            setSurvivorIndex={this.setSurvivorIndex}
            setUnsentSurvivors={this.setUnsentSurvivors}
            setSentSurvivors={this.setSentSurvivors}
          />
          <PrivateRoute
            path="/settings"
            authenticated={this.state.authenticated}
            component={Settings}
            userDetails={this.state.userDetails}
          />
          <PublicRoute
            path="/sign_up"
            authenticated={this.state.authenticated}
            component={SignUp}
          />
          <PublicRoute
            path="/sign_up_form_lawyer"
            authenticated={this.state.authenticated}
            component={LawyerSignUpStepper}
          />
          <PublicRoute
            path="/sign_up_form_survivor"
            authenticated={this.state.authenticated}
            component={SurvivorSignUpStepper}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
