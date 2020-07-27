import React, { Component } from "react";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import Home from "./components/home.js";
import Profile from "./components/profile.js";
import ReachOut from "./components/reach_out.js";
import Connections from "./components/connections.js";
import ConfirmScreen from "./components/confirm_screen.js";
import DeclineScreen from "./components/decline_screen.js";
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
import matcher from "./components/matcher.js";

function PrivateRoute({
  component: Component,
  authenticated,
  // next 3 lines for demo
  unsentRequests,
  allRequests,
  userId,
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
            unsentRequests={unsentRequests}
            allRequests={allRequests}
            userId={userId}
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

async function populateData() {

  // get all request objects
  let keys = await db.ref("requests/").once("value").then(function (snapshot) {
    return Object.keys(snapshot.val());
  });

  // determine if user is a lawyer or survivor
  let isLawyer = await db.ref("users/" + auth().currentUser.uid).once("value").then(function (snapshot) {
    return snapshot.child("isLawyer").val();
  });

  // find all relevant request objects
  let relevantIDs = [];
  let statuses = [];
  let contacts = [];
  let messages = [];
  if (isLawyer) {
    for (const key in keys) {
      await db.ref("requests/" + keys[key]).once("value").then(function (snapshot) {
        if (snapshot.child("lawyerID").val() === auth().currentUser.uid) {
          relevantIDs.push(snapshot.child("survivorID").val());
          statuses.push(snapshot.child("lawyerStatus").val());
          messages.push(snapshot.child("survivorMessage").val());
          contacts.push(snapshot.child("survivorContact").val());
        }
      });
    }
  } else {
    for (const key in keys) {
      await db.ref("requests/" + keys[key]).once("value").then(function (snapshot) {
        if (snapshot.child("survivorID").val() === auth().currentUser.uid) {
          relevantIDs.push(snapshot.child("lawyerID").val());
          statuses.push(snapshot.child("survivorStatus").val());
          messages.push(snapshot.child("survivorMessage").val());
          contacts.push(snapshot.child("survivorContact").val());
        }
      });
    }
  }

  // get all relevant lawyer information (names)
  let names = [];
  let practiceCounties = [];
  let bios = [];
  let abuseCounties = [];
  let colors = [];
  let currentCounties = [];
  let extraInfo = [];
  let financialCapabilities = [];
  let whenLastOccurred = [];
  let wereWeaponsInvolved = [];
  if (isLawyer) {
    for (const survivor in relevantIDs) {
      await db.ref("users/" + relevantIDs[survivor]).once("value").then(function (snapshot) {
        names.push(snapshot.child("name").val());
        abuseCounties.push(snapshot.child("abuseCounty").val());
        colors.push(snapshot.child("color").val());
        currentCounties.push(snapshot.child("currentCounty").val());
        extraInfo.push(snapshot.child("extraInfo").val());
        financialCapabilities.push(snapshot.child("financialCapability").val());
        whenLastOccurred.push(snapshot.child("lastOccurred").val());
        wereWeaponsInvolved.push(snapshot.child("weaponsInvolved").val());
      });
    }
  } else {
    for (const lawyer in relevantIDs) {
      await db.ref("users/" + relevantIDs[lawyer]).once("value").then(function (snapshot) {
        names.push(snapshot.child("name").val());
        practiceCounties.push(snapshot.child("practiceCounty").val());
        bios.push(snapshot.child("experience").val());
      });
    }
  }

  let lawyers;
  let survivors;

  if (isLawyer) {
    survivors = names.map((val, index) => {
      const name = names[index];
      const abuseCounty = abuseCounties[index];
      const color = colors[index];
      const currentCounty = currentCounties[index];
      const caseInfo = extraInfo[index];
      const financialCapability = financialCapabilities[index];
      const lastOccurred = whenLastOccurred[index];
      const weaponsInvolved = wereWeaponsInvolved[index];
      const status = statuses[index];
      const userId = relevantIDs[index];
      const contactMessage = contacts[index];
      const message = messages[index];
      return { name, abuseCounty, color, currentCounty, caseInfo, financialCapability, lastOccurred, weaponsInvolved, status, userId, contactMessage, message };
    })
  } else {
    lawyers = names.map((val, index) => {
      const name = names[index];
      let counties = practiceCounties[index].map((val, ind) => (ind !== (practiceCounties[index].length - 1) ? val + ", " : val));
      const bio = bios[index];
      const status = statuses[index];
      const userId = relevantIDs[index];
      return { name, counties, bio, status, userId };
    })
  }
  if (isLawyer) {
    return survivors;
  } else {
    return lawyers;
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      loading: true,
      userDetails: undefined,
      unsentRequests: [],
      allRequests: [],
      sentLawyers: [],
      lawyerIndex: 0,
      unsentSurvivors: [0, 1, 2, 3],
      sentSurvivors: [],
      survivorIndex: 0,
    };

    // this might not work
    this.setLawyerIndex = this.setLawyerIndex.bind(this);
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
    auth().onAuthStateChanged(async (user) => {
      if (user) {
        let data = await populateData();
        let unsent = data.filter(user => (user.status === "New Match!"));
        this.setState({ unsentRequests: unsent, allRequests: data });
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
              unsentRequests={this.state.unsentRequests}
              sentLawyers={this.state.sentLawyers}
              lawyerIndex={this.state.lawyerIndex}
              survivorIndex={this.state.survivorIndex}
              unsentSurvivors={this.state.unsentSurvivors}
              sentSurvivors={this.state.sentSurvivors}
              setLawyerIndex={this.setLawyerIndex}
              setSentLawyers={this.setSentLawyers}
              setSurvivorIndex={this.setSurvivorIndex}
              setUnsentSurvivors={this.setUnsentSurvivors}
              setSentSurvivors={this.setSentSurvivors}
            />
            {this.state.allRequests.map((user, index) => (
              <PrivateRoute
                key={index}
                path={`/profile/${user.userId}`}
                userId={user.userId}
                authenticated={this.state.authenticated}
                component={Profile}
                userDetails={this.state.userDetails}
                allRequests={this.state.allRequests}
              />
            ))
            }
            {this.state.allRequests.map((user, index) => (
              <PrivateRoute
                key={index}
                path={`/reach_out/${user.userId}`}
                userId={user.userId}
                authenticated={this.state.authenticated}
                component={ReachOut}
                userDetails={this.state.userDetails}
                allRequests={this.state.allRequests}
              />
            ))
            }
            {this.state.allRequests.map((user, index) => (
              <PrivateRoute
                key={index}
                path={`/confirm/${user.userId}`}
                userId={user.userId}
                authenticated={this.state.authenticated}
                component={ConfirmScreen}
                userDetails={this.state.userDetails}
                allRequests={this.state.allRequests}
              />
            ))
            }
            {this.state.allRequests.map((user, index) => (
              <PrivateRoute
                key={index}
                path={`/decline/${user.userId}`}
                userId={user.userId}
                authenticated={this.state.authenticated}
                component={DeclineScreen}
                userDetails={this.state.userDetails}
                allRequests={this.state.allRequests}
              />
            ))
            }
            <PrivateRoute
              path="/connections"
              authenticated={this.state.authenticated}
              component={Connections}
              userDetails={this.state.userDetails}
              allRequests={this.state.allRequests}
              unsentLawyers={this.state.unsentLawyers}
              sentLawyers={this.state.sentLawyers}
              lawyerIndex={this.state.lawyerIndex}
              survivorIndex={this.state.survivorIndex}
              unsentSurvivors={this.state.unsentSurvivors}
              sentSurvivors={this.state.sentSurvivors}
              setLawyerIndex={this.setLawyerIndex}
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
              userDetails={this.state.userDetails}
              component={LawyerSignUpStepper}
            />
            <PublicRoute
              path="/sign_up_form_survivor"
              authenticated={this.state.authenticated}
              userDetails={this.state.userDetails}
              component={SurvivorSignUpStepper}
            />
          </Switch>
        </Router>
      );
  }
}

export default App;
