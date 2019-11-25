import React, { Component } from "react";
import { TextField, Grid } from "@material-ui/core";
import {
  Logo,
  FreeShippingLogo,
  ReturnLogo,
  PriceMatchLogo
} from "../assets/index";

export default class Header extends Component {
  render() {
    return (
      <Grid container style={{ backgroundColor: "#141210" }} spacing={10}>
        <Grid item xs={2}>
          <img style={{ width: "100%", height: "100%" }} src={Logo} />
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              alignSelf: "center"
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "12px"
              }}
            >
              Speak To An Expert: 1-555-555{" "}
            </p>
          </div>
        </Grid>{" "}
        <Grid item xs={5}>
          <div>
            <div
              style={{
                fontSize: "12px",
                width: "50%",
                display: "flex",
                padding: "5%",
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              {" "}
              <text style={{ color: "white" }}>Customer Service</text>
              <text style={{ color: "white" }}>Order Status</text>
              <text style={{ color: "white" }}>Rent A Bike</text>
            </div>
            <form noValidate autoComplete="off">
              <TextField
                fullWidth
                className="textField"
                id="Search"
                label="Search Product or Part #"
              />
            </form>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div style={{ flexDirection: "column", display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              {" "}
              <img className="logo" src={FreeShippingLogo} />
              <img className="logo" src={ReturnLogo} />
              <img className="logo" src={PriceMatchLogo} />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}
