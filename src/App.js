import React, { Component } from "react";
import MainScreen from "./screens/MainScreen";
import { useSelector, useDispatch } from "react-redux";
import "./styles/style.module.css";

const App = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <div>
      <MainScreen />
      {/* cart: {cart} */}
    </div>
  );
};

export default App;
