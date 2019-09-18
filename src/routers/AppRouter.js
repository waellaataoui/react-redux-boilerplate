import createHistory from "history/createBrowserHistory";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import DashboardPage from "../components/pages/DashboardPage";
import LoginPage from "../components/pages/LoginPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
