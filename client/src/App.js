import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import signin from "./pages/signin";
import signup from "./pages/signup";
import AdminSignUp from "./pages/admin-signup";
import { connect } from "react-redux";

const App = ({ onAuthCheck }) => {
  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);

  return (
    <Router>
      <Switch>
        <Route path="/signin" component={signin} />
        <Route path="/signup" component={signup} />
        <Route path="/admin-login" component={AdminSignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch({ type: "AUTH_CHECK" }),
  };
};

export default connect(null, mapDispatchToProps)(App);
