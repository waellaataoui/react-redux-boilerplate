import "./loginPage.scss";

import React from "react";
import { connect } from "react-redux";
import Header from "src/components/Header";
import { startLogin } from "src/state/actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="wrapper">
    <Header show={true}></Header>
    <div className="box centered">
      <h1 className="box__title">Quotelify</h1>
      <p>Find The Best Quotes For You</p>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
