import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../auth/auth-utils";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isLoggedIn() ? (<Component {...props} />) : <Redirect to="/login" />}
    />
);

export default PrivateRoute;
