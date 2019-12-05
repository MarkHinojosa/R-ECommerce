import React, { Component } from "react";
import { Header, CategoriesBar } from "../components";
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
        <p>Boots</p>
        <button onClick={() => dispatch(addToCart("boots"))}>
          add to cart
        </button>
        <p>Helmet</p>
        <button onClick={() => dispatch(addToCart("helmet"))}>
          add to cart
        </button>
      </Grid>
    </Grid>
  );
};
export default MainScreen;
