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
      <div style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <div
          style={{
            height: "300px",
            width: "300px",
            backgroundImage: `url(${FeaturedDeal})`,
            backgroundRepeat: "none",
            backgroundSize: "cover"
          }}
        ></div>
        <div style={{ backgroundImage: `url(${WeekleyDealsFeatured})` }}></div>
        {/* <img src={FeaturedDeal} style={{ height: "100%", width: "40%" }} />{" "} */}
        {/* <img
          src={WeekleyDealsFeatured}
          style={{ height: "100%", width: "40%" }}
        /> */}
      </div>
    </div>

    // <Grid container spacing={2}>
    //   <Grid item xs={2}></Grid>
    //   <Grid item xs={4}>
    //     <img src={FeaturedDeal} style={{ height: "100%", width: "100%" }} />{" "}
    //   </Grid>
    //   <Grid item xs={4}>
    //     {" "}
    //     <img
    //       src={WeekleyDealsFeatured}
    //       style={{ height: "100%", width: "100%" }}
    //     />{" "}
    //   </Grid>
    //   <Grid item xs={10}>
    //     <img style={{ width: "100%" }} src={LastMinuteShopping} />
    //   </Grid>
    //   <Grid item xs={4}>
    //     <img src={HelmetFeatured} />
    //   </Grid>
    //   <Grid item xs={4}>
    //     <img src={StockingStuffers} />
    //   </Grid>
    // </Grid>
  );
};
const styles = {
  featuredContainer: {
    display: "flex",
    justifyContent: "column",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "red"
  }
};

export default Featured;
