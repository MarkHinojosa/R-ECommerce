import { Grid, Button } from "@material-ui/core";
import {
  FeaturedDeal,
  HelmetFeatured,
  LastMinuteShopping,
  StockingStuffers
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
          src={FeaturedDeal}
          style={{ height: "100%", width: "100%" }}
        />{" "}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Featured;
