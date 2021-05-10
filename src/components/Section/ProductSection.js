import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import LocalAtm from "@material-ui/icons/LocalAtm";
import MenuBook from "@material-ui/icons/MenuBook";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Go Read Books! 책 읽Go"
              description={[
                "책 읽는 가족",
                "책 읽는 대한민국 시상식",
                "독서동아리 지원",
                "전국 고전읽기 백일장 대회",
                "전국 청소년 독서감상문 발표대회",
                "아동·청소년 가족사랑 독서감상문대회",
                "병영 독서코칭",
              ]}
              icon={MenuBook}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Go Write! 쓰Go"
              description={[
                "WWH131키워드[패턴]글쓰기 지식플랫폼",
                "WWH131서평단 운영",
                "지도자 양성 프로그램 운영",
                " - 독서지도사 1,2,3급",
                " - 역사논술지도사 1,2,3급",
                " - 서평지도사 1,2,3급",
                " - 문화감상평지도사 1,2,3급",
                " - 독서상담사 1,2,3급",
                " - 독서경영지도사 1,2,3급",
                " - 독서동아리지도사 1,2,3급",
                " - DIE교육지도사 1,2,3급",
                " - 청소년또래서평지도사 1,2,3급",
                " - 청소년문화감상평지도사 1,2,3급",
              ]}
              icon={Edit}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Go Donate! 기부하Go"
              description={[
                "K-books 123 북메신저 릴레이",
                "기부리딩 기부리더 운동",
                "I love Book! 리틀라이브러리 기증 운동",
                "Book Bag 기증 운동",
              ]}
              icon={LocalAtm}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
