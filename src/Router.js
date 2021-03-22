import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Home1 from './views/Home copy';
import Home2 from './views/Home copy 2';
import Home3 from './views/Home copy 3';
// import Donation from './views/Donation';
// import Campaign from './views/Campaign';
// import Tab from './components/Tab';

export default function Routes() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/1" exact component={Home1} />
          <Route path="/2" exact component={Home2} />
          <Route path="/3" exact component={Home3} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}
