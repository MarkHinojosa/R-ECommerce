import React, { Component } from "react";
import MainScreen from "./screens/MainScreen";
import { useSelector, useDispatch } from "react-redux";
import "./styles/App.css";

const App = () => {
  const cart = useSelector(state => state.cart);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MainScreen />
    </div>
  );
};

export default App;
