import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/auth/private-route";
import Dashboard from "./pages/Dashboard";
import Home from './pages/home';
import Login from "./pages/login";

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
);

export default Routes;
