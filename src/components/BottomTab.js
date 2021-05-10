import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
}));

export default function BottomTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={false}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor="primary"
        >
          <Tab label="링크 1" icon={<PhoneIcon />} />
          <Tab label="링크 2" icon={<FavoriteIcon />} />
          <Tab label="링크 3" icon={<PersonPinIcon />} />
          <Tab label="링크 4" icon={<HelpIcon />} />
          <Tab label="링크 5" icon={<ShoppingBasket />} />
          <Tab label="링크 6" icon={<ThumbDown />} />
          <Tab
            label="링크 7"
            icon={<ThumbUp />}
            style={{ borderBottomColor: "transparent" }}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: "100%",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function BottomTab() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >
//           <Tab label="Item One" />
//           <Tab label="Item Two" />
//           <Tab label="Item Three" />
//           <Tab label="Item Four" />
//           <Tab label="Item Five" />
//           <Tab label="Item Six" />
//           <Tab label="Item Seven" />
//         </Tabs>
//       </AppBar>
//     </div>
//   );
// }
