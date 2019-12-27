import React from "react";

const PartSearch = () => {
  return (
    <div style={styles.partSearchRowContainer}>
      {" "}
      <div style={styles.partsSeachOutterContainer}>
        <h1
          style={{
            fontSize: "2.5em"
          }}
        >
          Shop By Bike
        </h1>
        <div style={styles.partsSearchInnerContainer}>
          <div style={styles.partsSelectionRow}>
            <div style={styles.selectionBoxsContainer}>
              <div>Aftermarket Parts</div>
            </div>
            <div style={styles.selectionBoxsContainer}>
              <div>OEM Parts</div>
            </div>
          </div>
          <div style={styles.dropdownsContainer}>
            <div style={styles.dropdownsRow}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  partSearchRowContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  partsSeachOutterContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "70%",
    height: "40vh",
    marginTop: "1%",
    border: 1,
    borderColor: "#d6d7da",
    borderTop: "orange",
    borderStyle: "solid"
  },
  partsSearchInnerContainer: {
    flex: "1",
    alignSelf: "center",
    backgroundColor: "gray",
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column"
  },
  partsSelectionRow: {
    height: "20%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center"
  },
  selectionBoxsContainer: {
    height: "100%",
    width: "25%",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "white",
    borderColor: "gray",
    borderTopColor: "orange",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  dropdownsContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  dropdownsRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "10px",
    backgroundColor: "blue"
  }
};

export default PartSearch;
