import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";

const App = props => [
   props.isLoggedIn ? <PrivateRoute key={2} /> : <PublicRoutes key={2} />,
   <Footer key={3} />
];

App.propTypes = {
   isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoute = props => (
   <Switch>
      <Route path="/" render={() => "feed"} exact />
      <Route path="/explore" render={() => "explore"} />
   </Switch>
);

const PublicRoutes = props => (
   <Switch>
      <Route path="/" component={Auth} exact />
      <Route path="/forgot" render={() => "password"} />
   </Switch>
);

export default App;
