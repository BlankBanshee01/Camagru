import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import { auth } from "./firebase/firebase";
import { login } from "./actions/auth";
import { setProfile } from "./actions/profile";
import Routes from "./router/routes";

const store = configureStore();

auth.onAuthStateChanged((user) => {
  if (user) {
    const profile = {
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    store.dispatch(login(user.uid));
    store.dispatch(setProfile(profile));
  }
});

const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
