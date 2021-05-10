import React from "react";
// core components
import classNames from "classnames";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import Post from "components/Post";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SEE_SINGLE_POST_QUERY from "components/queries/SeeSinglePostQuery";

const dashboardRoutes = [];
const Container = styled.div`
  padding: 30px 10px;
`;

const useStyles = makeStyles(styles);

const PostPage = (props) => {
  const { ...rest } = props;
  const classes = useStyles();
  const { id } = useParams();
  const { data, loading } = useQuery(SEE_SINGLE_POST_QUERY, {
    variables: {
      id: parseInt(id),
    },
  });
  if (!data || loading) {
    return null;
  }
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
        <Post data={data.seeSinglePost} />
      </Container>
    </div>
  );
};
export default PostPage;
