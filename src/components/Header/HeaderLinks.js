/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh;
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/aboutus" className={classes.navLink}>
          소개
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/readingkorea" className={classes.navLink}>
          책읽는 대한민국
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/campaigns" className={classes.navLink}>
          독서문화 진흥
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="대회"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/contest" className={classes.dropdownLink}>
              공지사항
            </Link>,
            <Link to="/contest/classic" className={classes.dropdownLink}>
              고전 백일장
            </Link>,
            <Link to="/contest/speech" className={classes.dropdownLink}>
              발표대회
            </Link>,
            <Link to="/contest/family" className={classes.dropdownLink}>
              가족사랑
            </Link>,
            <Link to="/constest/bookreview" className={classes.dropdownLink}>
              WWH131 서평대회
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="기부리딩 기부리더"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/club" className={classes.dropdownLink}>
              서평 독서 동아리
            </Link>,
            <Link to="/littlelibrary" className={classes.dropdownLink}>
              리틀 라이브러리
            </Link>,
            <Link to="/donation" className={classes.dropdownLink}>
              후원
            </Link>,
            <Link to="/usagehistory" className={classes.dropdownLink}>
              사용내역
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip
          id="instagram-twitter"
          title="유튜브 채널"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://youtube.com"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
