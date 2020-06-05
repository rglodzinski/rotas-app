import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { isLoggedIn } from "../components/auth/auth-utils";

const Header = () => {

    const history = useHistory();
    const [logged, setLogged] = useState(isLoggedIn());

    const doLogout = () => {
        localStorage.setItem("loggedIn", false);
        setLogged(false);
        history.push("/");
    };

    const doLogin = () => {
        localStorage.setItem("loggedIn", true);
        setLogged(true);
        history.push("/dashboard");
    };

    return (
        <div>
            {logged && <button onClick={doLogout}>Logout</button>}
            {!logged && <button onClick={doLogin}>Login</button>}
        </div>
    );
};

export default Header;