import React, { Component } from "react";
import { Header, CategoriesBar } from "../components";
import { Grid } from "@material-ui/core";

export default class MainScreen extends Component {
  render() {
    return (
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Header />
          <CategoriesBar />
          <p>Boots</p>
          <button>add to cart</button>
        </Grid>
      </Grid>
    );
  }
}
