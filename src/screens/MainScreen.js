import React, { Component } from "react";
import { Header, CategoriesBar, Carousel, Featured } from "../components";
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

      <div style={styles.div3}>
        <Featured />
      </div>

      {/* <Grid container spacing={12}>
        <Grid item xs={12}>
          <Header />
          <CategoriesBar />
          <Carousel />
          <Featured />
        </Grid>
      </Grid> */}
    </div>
  );
};

const styles = {
  gridContainer: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: 'repeat("1fr")',
    gridTemplateRows: 'repeat("1fr")',
    overflow: "scroll"
  },
  div1: {
    gridColumn: " 1 / 13",
    backgroundColor: "red"
  },
  div2: {
    gridColumn: " 1 / 13",
    gridRow: "2 / 4",
    backgroundColor: "blue"
  },
  div3: {
    gridColumn: "2 / 11",
    gridRow: " 5 / 11",
    backgroundColor: "green"
  }
};
export default MainScreen;
