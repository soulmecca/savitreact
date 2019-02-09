import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./styles.scss";
import Footer from "components/Footer";

const App = props => [
   props.isLoggedIn ? <PrivateRoute key={2} /> : <PublicRoutes key={2} />,
   <Footer key={3} />
];

const PrivateRoute = props => (
   <Switch>
      <Route path="/" render={() => "feed"} exact />
      <Route path="/explore" render={() => "explore"} />
   </Switch>
);

const PublicRoutes = props => (
   <Switch>
      <Route path="/" render={() => "login"} exact />
      <Route path="/forgot" render={() => "password"} />
   </Switch>
);

export default App;
