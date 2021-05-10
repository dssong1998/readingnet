import React from "react";
// core components
import classNames from "classnames";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Board from "components/Board";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

const dashboardRoutes = [];
const Container = styled.div`
  padding: 30px 10px;
`;

const useStyles = makeStyles(styles);

const Contest = (props) => {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#2c2c2c" }}>
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
      <Container className={classNames(classes.main, classes.mainRaised)}>
        <Board type="contest" />
      </Container>
    </div>
  );
};
export default Contest;
