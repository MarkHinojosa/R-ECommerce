import React from "react";
import Box from "@material-ui/core/Box";

const PartSearch = () => {
  return (
    <div style={styles.partSearchContainer}>
      {" "}
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          width: "70%",
          height: "40vh",
          marginTop: "1%",
          border: 1,
          borderColor: "#d6d7da",
          borderTop: "orange",
          borderStyle: "solid"
        }}
      >
        <h1
          style={{
            fontSize: "2.5em"
          }}
        >
          Shop By Bike
        </h1>
        <div
          style={{
            flex: "1",
            alignSelf: "center",
            backgroundColor: "gray",
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={styles.partsSelectionRow}>
            <div
              style={{
                height: "100%",
                width: "25%",
                alignContent: "center",
                textAlign: "center",
                backgroundColor: "white",
                borderColor: "gray",
                borderTopColor: "orange",
                borderStyle: "solid",
                borderWidth: 1,
                alignSelf: "center"
              }}
            >
              Aftermarket Parts
            </div>
            <div
              style={{
                height: "100%",
                width: "25%",
                alignContent: "center",
                textAlign: "center",
                backgroundColor: "white",
                borderColor: "gray",
                borderTopColor: "orange",
                borderStyle: "solid",
                borderWidth: 1
              }}
            >
              OEM Parts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  partSearchContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  partsSelectionRow: {
    height: "20%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center"
  }
};

export default PartSearch;
