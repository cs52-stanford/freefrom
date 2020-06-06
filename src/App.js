import React, { Component } from "react";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import Home from "./components/home.js";
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
  userDetails,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} userDetails={userDetails} />
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
    };
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
