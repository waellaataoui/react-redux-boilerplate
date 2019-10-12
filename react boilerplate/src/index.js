import "normalize.css/normalize.css";
import "./styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import App, { store } from "./components/App";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./state/actions/auth";

let rendered = false;
const renderApp = () => {
  ReactDOM.render(<App></App>, document.getElementById("app"));
  rendered = true;
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    if (!rendered) {
      renderApp();
    }
  } else {
    store.dispatch(logout());
    if (!rendered) {
      renderApp();
    }
  }
});
