import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import App from "./App";
import Login from "./components/Login";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Login />
    {/* <App /> */}
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
