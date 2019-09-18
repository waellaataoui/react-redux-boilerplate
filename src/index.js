import "normalize.css/normalize.css";
import "./styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import App, { store } from "./components/App";
import LoadingPage from "./components/pages/LoadingPage";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./state/actions/auth";

const renderApp = () => {
  ReactDOM.render(<App></App>, document.getElementById("app"));
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
  } else {
    store.dispatch(logout());
    renderApp();
  }
});
