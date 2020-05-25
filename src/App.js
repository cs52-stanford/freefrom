import React, { useState } from "react";
import { Component } from "react";
import logo from "./logo.svg";
import SignIn from "./components/sign_in.js";
import SignUp from "./components/sign_up.js";
import LawyerMatches from "./components/lawyer_matches.js";
import SurvivorHome from "./components/survivor_home.js";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from "./services/firebase";

import "./App.css";
import LawyerHome from "./components/lawyer_home";
import LawyerSignUp from "./components/sign_up_form_lawyer";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
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
          <Redirect to="/sign_up_form_lawyer" />
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
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <PrivateRoute
            path="/lawyer_home"
            authenticated={this.state.authenticated}
            component={LawyerHome}
          />
          <PrivateRoute
            path="/survivor_home"
            authenticated={this.state.authenticated}
            component={SurvivorHome}
          />
          <PublicRoute
            path="/sign_up"
            authenticated={this.state.authenticated}
            component={SignUp}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
