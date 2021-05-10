import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import InfoArea from "components/InfoArea/InfoArea";
import LocalAtm from "@material-ui/icons/LocalAtm";
import RegularButton from "components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="후원 하기"
            icon={LocalAtm}
            iconColor="success"
            vertical
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            (사)국민독서문화진흥회는 법인세법에 의거한 지정기부금단체입니다.
          </h4>
          <h4 className={classes.description}>
            후원해주신 기부금은 법인은 소득 금액의 10%, 개인은 30% 범위 내에서
            손비인정 또는 소득공제를 받을 수 있는 기부금 영수증을
            발급해드립니다.
          </h4>
          <h4 className={classes.description}>
            또한 직접 무통장입금을 통하여 후원에 참여하실 수도 있습니다.
          </h4>
          <h4 className={classes.description}>
            우리은행 1005-002-753975 (예금주: (사)국민독서문화진흥회) 신한은행
            100-031-077570 (예금주: (사)국민독서문화진흥회)
          </h4>
          <h4 className={classes.description}>
            단 직접 무통장입금을 하신 경우 별도로 법인사무실로 연락을 주셔야만
            기부금 영수증 발급이 가능합니다.
          </h4>
          <h4 className={classes.description}>
            문의전화 02-913-9582 / keul0055@naver.com
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" style={{ marginTop: "50px" }}>
        <GridItem
          xs={12}
          sm={7}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RegularButton color="info">
            <a
              href={
                process.env.REACT_APP_DATABASE_URI +
                "/static/file/개인정보처리방침.hwp"
              }
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>개인정보처리방침 확인하기</h3>
            </a>
          </RegularButton>
        </GridItem>
        <GridItem
          xs={12}
          sm={5}
          md={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RegularButton color="success">
            <a
              href="https://view.hyosungcms.co.kr/shorten-url/c5xQjPIIul"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>후원하기</h3>
            </a>
          </RegularButton>
        </GridItem>
      </GridContainer>
    </div>
  );
}
