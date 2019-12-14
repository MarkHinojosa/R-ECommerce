import React, { Component } from "react";
import { Grid } from "@material-ui/core";

const Carousel = () => {
  return (
    <Grid container spacing={12}>
      <Grid itemxs={12} style={styles.carouselContainer}>
        carousel
      </Grid>{" "}
    </Grid>
  );
};

const styles = {
  carouselContainer: {
    backgroundColor: "blue",
    height: "100%",
    width: "100%"
  }
};
export default Carousel;
