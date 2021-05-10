import React from "react";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import FeedSection from "components/FeedSection";

const dashboardRoutes = [];

const Family = (props) => {
  const { ...rest } = props;
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
      <FeedSection type="Family" />
    </div>
  );
};
export default Family;
