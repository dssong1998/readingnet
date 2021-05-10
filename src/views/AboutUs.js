import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { useQuery } from "@apollo/client";
import SEE_HISTORY from "components/queries/SeeHistoryQuery";
import History from "components/History";

const Container = styled.div`
  padding: 30px 10px;
`;
const Subtitle = styled.h3`
  font-size: 20px;
  color: #6d6d6d;
`;
const Content = styled.div`
  margin: 10px 0px;
  font-size: 16px;
  color: black;
`;
const FootContent = styled.p`
  font-size: 18px;
  color: black;
  text-align: right;
`;

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const AboutUs = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const { data, loading } = useQuery(SEE_HISTORY);
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
        <div className={classes.container}>
          {/* <Title>국민 독서 문화 진흥회</Title> */}
          <GridContainer spacing={10}>
            <GridItem xs={12} sm={12} md={6}>
              <Subtitle>회장 인사말</Subtitle>
              <Content>
                가까이 다가가겠습니다.
                <br />
                <br />
                독서가 생활에 유용하다는 것을 모든 국민이 알고 있지만 ‘습관적
                독자’는 성인의 13.5%(2019년 기준)로 낮은 상태입니다.
                <br />
                <br />
                책을 사는 것도 중요하지만 ‘왜 읽어야 하는지’에 대해 동기부여 할
                수 있어야 합니다.
                <br />
                <br />
                우리 진흥회는 자라나는 어린이·청소년들의 정신문화를 바르고
                풍요롭게 선도하는데 사회적 책임을 다하겠습니다.
                <br />
                <br />
                가정, 직장에서 다양한 독서 활동을 통하여 개인의 삶의 질을
                높이고, 행복을 추구할 수 있도록 가까이 다가가겠습니다.
              </Content>
              <Content>
                함께 만들어가겠습니다.
                <br />
                <br />
                3Go 독서프로젝트[책 읽Go, 서평쓰Go, 기부하Go]를 통해 누구나
                ‘책읽는나라만들기’에 동참하실 수 있습니다.
              </Content>
              <Content>
                책 친구가 되어 동행하겠습니다.
                <br />
                <br />
                “만 권의 책을 읽고(讀萬券書), 만 리 길을 여행하며(行萬里路), 만
                명의 벗을 사귀어라(交萬人友)”
              </Content>
              <FootContent>독서대통령 김을호 Dream</FootContent>
            </GridItem>
            <History data={data.seeHistories} />
          </GridContainer>
        </div>
      </Container>
    </div>
  );
};
export default AboutUs;
