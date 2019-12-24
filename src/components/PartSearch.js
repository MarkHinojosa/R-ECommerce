import React from "react";

const PartSearch = () => {
  return (
    <div style={styles.partSearchContainer}>
      {" "}
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "blue",
          width: "70%",
          height: "40vh",
          padding: "1%"
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
            height: "50%"
          }}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  partSearchContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  }
};

export default PartSearch;
