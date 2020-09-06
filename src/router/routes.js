import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "../App";
import Login from "../components/Login";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
