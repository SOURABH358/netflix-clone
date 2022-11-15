import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return <nav className="navbar">
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt = "logo"/>
        </div>
        <div className="tabs">
            <div className="lang">
                English
            </div>
            <Link to = "sign-in" className="sign__in">Sign in</Link>
        </div>
    </nav>
}

export default Navbar;