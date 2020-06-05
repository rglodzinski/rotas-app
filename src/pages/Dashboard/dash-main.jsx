import React from 'react';
import { Link } from "react-router-dom";

const DashMain = ({ match }) => {
    const dashboardPath = match.path;
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={`${dashboardPath}/dash01`}>Dash 01</Link>
                    </li>
                    <li>
                        <Link to={`${dashboardPath}/dash02`}>Dash 02</Link>
                    </li>
                </ul>
            </nav>
            <p>Dash Contents</p>

        </div>
    );
};

export default DashMain;
