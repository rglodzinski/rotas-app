import React from "react";
import PrivateRoute from "../../components/auth/private-route";
import Dash01 from "./dash01";
import Dash02 from "./dash02";
import DashMain from "./dash-main";

const Routes = props => {
    console.log(`Props.match=${props.match}`);
    const dashboardPath = props.match.path;
    return (
        <div>
            <PrivateRoute path={dashboardPath} component={DashMain} />
            <PrivateRoute path={`${dashboardPath}/dash01`} component={Dash01} />
            <PrivateRoute path={`${dashboardPath}/dash02`} component={Dash02} />
        </div>
    );
};

export default Routes;
