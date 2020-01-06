import {
  FeaturedDeal,
  HelmetFeatured,
  LastMinuteShopping,
  StockingStuffers,
  WeekleyDealsFeatured
} from "../assets/index";

import React from "react";

const Featured = () => {
  return (
    <div style={styles.featuredContainer}>
      <div style={styles.dealsRow}>
        <div style={{ width: "100%", display: "flex", paddingRight: "1%" }}>
          <img
            alt="featuredDeal"
            src={FeaturedDeal}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              alignSelf: "center"
            }}
          />{" "}
        </div>
        <div style={{ width: "100%", display: "flex", paddingLeft: "1%" }}>
          {" "}
          <img
            alt="weeklyDealsFeatured"
            src={WeekleyDealsFeatured}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
      </div>
      <div style={styles.bannerRow}>
        <img style={{ width: "100%" }} src={LastMinuteShopping} />
      </div>
      <div style={styles.dealsRow}>
        <div style={{ width: "100%", display: "flex", paddingRight: "1%" }}>
          <img
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              alignSelf: "center"
            }}
            src={HelmetFeatured}
          />
        </div>
        <div style={{ width: "100%", display: "flex", paddingLeft: "1%" }}>
          <img
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              alignSelf: "center"
            }}
            src={StockingStuffers}
          />
        </div>
      </div>
    </div>
  );
};
const styles = {
  featuredContainer: {
    display: "flex",
    justifyContent: "column",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    alignContent: "center",
    flexDirection: "column"
  },
  dealsRow: {
    height: "30vh",
    width: "70%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignContent: "center",
    marginTop: "3%",
    alignSelf: "center"
  },
  bannerRow: {
    height: "30%",
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    marginTop: "3%",
    alignSelf: "center",
    alignItems: "center"
  }
};

export default Featured;
