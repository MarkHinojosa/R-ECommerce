import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import {
  CardoPhoto,
  HelmetsPhoto,
  JacketPhoto,
  LeatherJacketPhoto,
  ThisWeekPhoto
} from "../assets/index";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

let photoArray = [
  CardoPhoto,
  HelmetsPhoto,
  JacketPhoto,
  LeatherJacketPhoto,
  ThisWeekPhoto
];

class Carousel extends React.Component {
  state = {
    displayImageIndex: 1
  };

  _onLeftArrowCLick = () => {
    let photoArrayLength = photoArray.length;
    if (this.state.displayImageIndex > 0) {
      let subtractToIndex = this.state.displayImageIndex - 1;
      this.setState({
        displayImageIndex: subtractToIndex
      });
    } else {
      this.setState({
        displayImageIndex: photoArrayLength - 1
      });
    }
  };

  _onRightArrowClick = () => {
    let addToIndex = this.state.displayImageIndex + 1;
    this.setState({
      displayImageIndex: addToIndex
    });
  };

  render() {
    let { displayImageIndex } = this.state;
    return (
      <Grid container spacing={12} style={{ height: "100%" }}>
        <Grid item xs={12} style={styles.carouselContainer}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundImage: `url(${photoArray[displayImageIndex]})`,
              backgroundSize: "contain"
            }}
          >
            <Button
              style={styles.changeCarouselImageButton}
              onClick={() => this._onLeftArrowCLick()}
            >
              <ArrowBackIosIcon />
            </Button>
            <Button
              style={styles.changeCarouselImageButton}
              onClick={() => this._onRightArrowClick()}
            >
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </Grid>{" "}
      </Grid>
    );
  }
}

const styles = {
  carouselContainer: {
    backgroundColor: "silver",
    height: "100%",
    width: "100%"
  },
  changeCarouselImageButton: {
    height: "100%",
    width: "15%",
    backgroundColor: "rgba(0,0,0,.5)",
    color: "white"
  }
};
export default Carousel;
