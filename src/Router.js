import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./views/Home";
import Campaign from "./views/Campaign";
import Donation from "./views/Donation";
import ReadingKorea from "views/ReadingKorea";
import AboutUs from "views/AboutUs";
import UsageHistory from "views/UsageHistory";
import Club from "views/Club";
import LittleLibrary from "views/LittleLibrary";
import BookReview from "views/BookReview";
import Family from "views/Family";
import Speech from "views/Speech";
import Classic from "views/Classic";
import Contest from "views/Contest";
import NewPost from "views/NewPost";
import PostPage from "views/PostPage";

export default function Routes() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/readingkorea" component={ReadingKorea} />
          <Route path="/donation" component={Donation} />
          <Route path="/campaigns" component={Campaign} />
          <Route path="/club" component={Club} />
          <Route path="/littlelibrary" component={LittleLibrary} />
          <Route path="/usagehistory/:id" component={UsageHistory} />
          <Route path="/usagehistory" component={UsageHistory} />
          <Route path="/newpost/:type" component={NewPost} />
          <Route path="/contest/classic" component={Classic} exact />
          <Route path="/contest/speech" component={Speech} exact />
          <Route path="/contest/family" component={Family} exact />
          <Route path="/constest/bookreview" component={BookReview} exact />
          <Route path="/contest/:id" component={PostPage} />
          <Route path="/contest" component={Contest} exact />
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}
