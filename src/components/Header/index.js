import React from "react";
import "../../assets/styles/components/Header.css";
import logo from "../../assets/statics/logo.svg";
import { useUserData } from "../../hooks/useUserData";
import { Link, useRoute } from "wouter";

const Header = () => {
    const { isLogged, getLogout } = useUserData();
    const [matchLoginPage] = useRoute("/login");
    console.log(isLogged);

    const nav = !isLogged ? (
        <Link to="/login">Login</Link>
    ) : (
        <button onClick={getLogout}>Logout</button>
    );

    const navPageLogin = matchLoginPage ? null : nav;
    return (
        <header className="w-100">
            <div className="w-100 flex justify-end header-login">
                {navPageLogin}
            </div>
            <div className="flex align-center justify-center">
                <img className="header-logo" src={logo} alt="logo sparkles" />
                <Link to="/">
                    <h1 className="header-title">amispelis</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
