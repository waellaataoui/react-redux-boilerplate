import "./_header.scss";

import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { startLogout } from "../../state/actions/auth";

export const Header = (props) => {
  let jsx = null;

  props.history.location.pathname !== "/login" || props.show
    ? (jsx = (
        <header className={props.show ? "header transparent" : "header"}>
          <div className="content-container">
            <div className="header__content">
              <Link className="header__title" to="/">
                <h1>React App</h1>
              </Link>
              <div className="header__links">
                <NavLink className="button button--link" exact to="/">
                  Home
                </NavLink>
                {props.uid ? (
                  <button
                    className="button button--link "
                    onClick={() => {
                      props
                        .startLogout()
                        .then(() => (window.location.href = "/login")); //hard redirect..
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                ) : (
                  <NavLink className="button button--link " exact to="/login">
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </header>
      ))
    : (jsx = null);

  return jsx;
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => ({
  uid: state.auth.uid
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
