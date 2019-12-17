import React, { Component } from "react";
import { Header, CategoriesBar, Carousel } from "../components";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const MainScreen = () => {
  const dispatch = useDispatch();

  return (
    <Grid container spacing={12}>
      <Grid item xs={12}>
        <Header />
        <CategoriesBar />
        <Carousel />
      </Grid>
    </Grid>
  );
};
export default MainScreen;
