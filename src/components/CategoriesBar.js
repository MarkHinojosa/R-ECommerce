import React, { Component } from "react";
import { Grid } from "@material-ui/core";
export default class CategoriesBar extends Component {
  render() {
    return (
      <Grid style={styles.catBarContainer} container spacing={12}>
        <Grid item xs={8}>
          <ul
            style={{ listStyle: "none", display: "flex", flexDirection: "row" }}
          >
            <li style={styles.listItem}>HELMETS</li>
            <li style={styles.listItem}>RIDING GEAR</li>
            <li style={styles.listItem}>PARTS</li>
            <li style={styles.listItem}>OEM</li>
            <li style={styles.listItem}>ACCESSORIES</li>
            <li style={styles.listItem}>TIRES</li>
            <li style={styles.listItem}>WOMANS</li>
            <li style={styles.listItem}>BRANDS</li>
            <li style={styles.listItem}>RIDING STYLE</li>
            <li style={styles.listItem}>SALE</li>
          </ul>
        </Grid>
        <Grid item xs={4}>
          <Grid style={{ height: "100%" }} container spacing={12}>
            <Grid style={{ height: "100%" }} item xs={4}>
              <div style={styles.shopHolidayContainer}>SHOP HOLIDAY</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  catBarContainer: {
    // display: "grid",
    backgroundColor: "#FA4C17",
    // width: "100%",
    height: "25%"
  },
  listItem: {
    margin: "5px",
    fontSize: "13px",
    color: "white"
  },
  shopHolidayContainer: {
    backgroundColor: "#6ad8ca",
    height: "100%"
  }
};
