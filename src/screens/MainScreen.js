import React, { Component } from "react";
import {
  Header,
  CategoriesBar,
  Carousel,
  Featured,
  PartSearch,
  CategoriesImages,
  BrandsCarousel
} from "../components";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import "../styles/App.css";

const MainScreen = () => {
  const dispatch = useDispatch();

  return (
    <div style={styles.gridContainer}>
      <div style={styles.div1}>
        <Header />
        <CategoriesBar />
      </div>
      <div style={styles.div2}>
        <Carousel />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        {" "}
        <Featured />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        {" "}
        <PartSearch />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <CategoriesImages />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <BrandsCarousel />
      </div>
    </div>
  );
};

const styles = {
  gridContainer: {
    width: "100%",
    height: "100%"
    // overflow: "scroll"
  },
  div1: {
    backgroundColor: "red"
  },
  div2: {
    backgroundColor: "blue"
  },
  div3: {
    gridColumn: "2 / 11",
    gridRow: " 5 / 11",
    backgroundColor: "green"
  }
};
export default MainScreen;
