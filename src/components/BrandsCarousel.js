import React from "react";

const BrandsCarousel = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "red",
        width: "100%",
        alignSelf: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "lime",
          width: "70%",
          alignSelf: "center"
        }}
      >
        <div
          style={{ height: "100px", width: "100px", backgroundColor: "blue" }}
        ></div>
        <div
          style={{ height: "100px", width: "100px", backgroundColor: "yellow" }}
        ></div>
        <div
          style={{ height: "100px", width: "100px", backgroundColor: "green" }}
        ></div>
        <div
          style={{ height: "100px", width: "100px", backgroundColor: "orange" }}
        ></div>
        <div
          style={{ height: "100px", width: "100px", backgroundColor: "pink" }}
        ></div>
      </div>
    </div>
  );
};

export default BrandsCarousel;
