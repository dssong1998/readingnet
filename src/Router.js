import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./views/Home";
import Campaign from "./views/Campaign";
// import Donation from './views/Donation';
// import Campaign from './views/Campaign';
// import Tab from './components/Tab';

export default function Routes() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/campaigns" component={Campaign} />
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}
