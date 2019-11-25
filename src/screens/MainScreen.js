import React, { Component } from "react";
import { Header } from "../components";
import { Grid, TextField } from "@material-ui/core";

export default class MainScreen extends Component {
  render() {
    return (
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
    );
  }
}
