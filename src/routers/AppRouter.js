import createHistory from "history/createBrowserHistory";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Header from "src/components/Header";
import DashboardPage from "../components/pages/DashboardPage";
import LoginPage from "../components/pages/LoginPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
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
