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
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <img src={FeaturedDeal} style={{ height: "100%", width: "100%" }} />{" "}
      </Grid>
      <Grid item xs={4}>
        {" "}
        <img
          src={WeekleyDealsFeatured}
          style={{ height: "100%", width: "100%" }}
        />{" "}
      </Grid>
      <Grid item xs={8}>
        <img src={LastMinuteShopping} />
      </Grid>
      <Grid item xs={4}>
        <img src={HelmetFeatured} />
      </Grid>
      <Grid item xs={4}>
        <img src={StockingStuffers} />
      </Grid>
    </Grid>
  );
};

export default Featured;
