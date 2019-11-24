import React, { Component } from "react";
import { Header } from "../components";
import { Grid } from "@material-ui/core";

export default class MainScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid style={{ justifyContent: "center" }} spacing={12} container>
          <Header />
        </Grid>
      </React.Fragment>
    );
  }
}
