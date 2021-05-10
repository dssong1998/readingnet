import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import WorkSection from "components/Section/WorkSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="사단법인 국민독서문화진흥회"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        image={require("assets/img/bg_campaign.jpg")}
        style={{ height: "20vh" }}
      ></Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: "-30px" }}
      >
        <div className={classes.container}>
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
