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
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />{" "}
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          {" "}
          <img
            src={WeekleyDealsFeatured}
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
const styles = {
  featuredContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    alignContent: "center"
  },
  dealsRow: {
    height: "30vh",
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: "5%",
    alignSelf: "center"
  }
};

export default Featured;
