import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "./Router";
import Footer from "./components/Footer";
import { ApolloProvider } from "@apollo/client";
import client from "apollo";
import GlobalStyles from "styles/globalStyles";
import BottomTab from "components/BottomTab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  },
  main: {
    display: "flex",
    flexDirection: "row",
  },
  imageSection: {
    backgroundColor: "#cfe8fc",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.main}>
          <Routes />
        </div>
        <Footer
          title="국민독서문화진흥회"
          description="등록번호: 000-00-000000 | 회장: 김을호 | 주소: 서울시 성북구 동소문로 269 601호(길음동, 태창빌딩) | 대표전화: 02-913-9582 | 팩스: 02-913-9584"
        />
        <BottomTab />
      </div>
    </ApolloProvider>
  );
}

export default App;
