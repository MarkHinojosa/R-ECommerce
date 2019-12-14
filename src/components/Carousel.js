import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { CardoPhoto } from "../assets/index";

class Carousel extends React.Component {
  state = {
    displayImage: 0
  };

  render() {
    return (
      <Grid container spacing={12}>
        <Grid itemxs={12} style={styles.carouselContainer}>
          <img src={CardoPhoto} style={{ width: "100%" }} />
        </Grid>{" "}
      </Grid>
    );
  }
}

const styles = {
  carouselContainer: {
    backgroundColor: "blue",
    height: "10%",
    width: "100%"
  }
};
export default Carousel;
