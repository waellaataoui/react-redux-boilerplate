import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Header from "src/components/Header";
import DashboardPage from "../components/pages/DashboardPage";
import LoginPage from "../components/pages/LoginPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();
const AppRouter = () => (
  //custom history to acces outside of routes usefull for pushing routes
  //for components using withRouter is more relevant cos of props re-render
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
