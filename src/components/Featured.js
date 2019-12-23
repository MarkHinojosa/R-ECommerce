import { Grid, Button } from "@material-ui/core";
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
        <div style={{ width: "100%", display: "flex" }}>
          <img
            src={FeaturedDeal}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              paddingRight: "5px",
              alignSelf: "center"
            }}
          />{" "}
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          {" "}
          <img
            src={WeekleyDealsFeatured}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              paddingLeft: "5px"
            }}
          />
        </div>
      </div>
      <div style={styles.bannerRow}>
        <img style={{ width: "100%" }} src={LastMinuteShopping} />
      </div>
      <div style={styles.dealsRow}>
        <div style={{ width: "100%", display: "flex" }}>
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
        <div style={{ width: "100%", display: "flex" }}>
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
    borderColor: "red",
    borderWidth: "3px",
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
    marginTop: "5%",
    alignSelf: "center"
  },
  bannerRow: {
    height: "30%",
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    marginTop: "5%",
    alignSelf: "center",
    alignItems: "center"
  }
};

export default Featured;
