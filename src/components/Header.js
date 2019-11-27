import React, { Component } from "react";
import { TextField, Grid } from "@material-ui/core";
import {
  Logo,
  FreeShippingLogo,
  ReturnLogo,
  PriceMatchLogo
} from "../assets/index";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import styles from "../styles/style.module.css";

export default class Header extends Component {
  render() {
    return (
      <Grid container style={{ backgroundColor: "#141210" }} spacing={12}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                // padding: "10px",
                fontSize: "12px",
                width: "50%",
                display: "flex",
                padding: "5%",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              {" "}
              <text style={{ color: "white" }}>Customer Service</text>
              <text style={{ color: "white" }}>Order Status</text>
              <text style={{ color: "white" }}>Rent A Bike</text>
            </div>
            <form noValidate autoComplete="off">
              <TextField
                style={{ backgroundColor: "white" }}
                fullWidth
                className="textField"
                id="Search"
                label="Search Product or Part #"
              />
            </form>
          </div>
        </Grid>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column"
          }}
          item
          xs={5}
        >
          {" "}
          <div style={styles.accountLinksContainer}>
            <p style={styles.accountLinkText}>Login/Signup </p>
            <p style={styles.accountLinkText}>My Garage </p>
            <p style={styles.accountLinkText}>ZillaCash $0 </p>
            <div style={{ display: "flex", justifyContent: "row" }}>
              <ShoppingCartIcon
                style={{ alignSelf: "center" }}
                color="secondary"
                fontSize="large"
              />
              <p style={styles.accountLinkText}>CART</p>
            </div>
          </div>
          <div>
            <img
              alt="freeShippingLogo"
              className="mogo"
              style={{ width: "33%" }}
              src={FreeShippingLogo}
            />
            <img
              alt="returnLogo"
              style={{ width: "33%" }}
              className="mogo"
              src={ReturnLogo}
            />
            <img
              alt="priceMatchLogo"
              style={{ width: "33%" }}
              src={PriceMatchLogo}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  accountLinksContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  accountLinkText: {
    color: "white"
  }
};
