import React, { Component } from "react";
import MainScreen from "./screens/MainScreen";
import { Grid } from "@material-ui/core";

export default class App extends Component {
  render() {
    return (
      <Grid
        // style={{ justifyContent: "center", height: "100vh" }}
        container
        spacing={12}
      >
        <Grid item xs={12}>
          <MainScreen />
        </Grid>
      </Grid>
    );
  }
}
