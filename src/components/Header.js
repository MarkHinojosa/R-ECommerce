import React from "react";
import { TextField, Grid } from "@material-ui/core";
import {
  Logo,
  FreeShippingLogo,
  ReturnLogo,
  PriceMatchLogo
} from "../assets/index";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import styles from "../styles/style.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector(state => state.cart);

  return (
    <Grid container style={{ backgroundColor: "#141210" }} spacing={12}>
      <Grid
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1%"
        }}
        item
        xs={3}
      >
        <img alt="Logo" style={styles.mainLogo} src={Logo} />
        <div style={styles.contactPhTextContainer}>
          <p style={styles.contactPhText}>Speak To An Expert: 1-555-555 </p>
        </div>
      </Grid>{" "}
      <Grid item xs={5}>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={styles.topMiddleRow}>
            {" "}
            <text style={styles.whiteText}>Customer Service</text>
            <text style={styles.whiteText}>Order Status</text>
            <text style={styles.whiteText}>Rent A Bike</text>
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
        xs={4}
      >
        {" "}
        <div style={styles.accountLinksContainer}>
          <p style={styles.accountLinkText}>Login/Signup </p>
          <p style={styles.accountLinkText}>My Garage </p>
          <p style={styles.accountLinkText}>ZillaCash $0 </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row"
            }}
          >
            <ShoppingCartIcon
              style={{ alignSelf: "center" }}
              color="secondary"
              fontSize="large"
            />
            <p style={styles.accountLinkText}>CART</p>
            <p style={{ color: "yellow", margin: "5px" }}>{cart.length}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
            // flexWrap: "no-wrap"
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              alt="freeShippingLogo"
              className="mogo"
              style={{ width: "60%", height: "100%" }}
              src={FreeShippingLogo}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <img
              alt="returnLogo"
              style={{ width: "60%", height: "100%" }}
              className="mogo"
              src={ReturnLogo}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              alt="priceMatchLogo"
              style={{ width: "60%", height: "100%" }}
              src={PriceMatchLogo}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const styles = {
  accountLinksContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  accountLinkText: {
    color: "white"
  },
  mainLogo: {
    width: "290px",
    height: "70px",
    alignSelf: "center"
  },
  contactPhText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "12",
    margin: 0
  },
  topMiddleRow: {
    fontSize: "12px",
    width: "50%",
    display: "flex",
    padding: "3%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  whiteText: {
    color: "white"
  },
  contactPhTextContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center"
  }
};

export default Header;
