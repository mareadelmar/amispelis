import React from "react";
import "../../assets/styles/components/Header.css";
import logo from "../../assets/statics/logo.svg";

const Header = () => {
    return (
        <header className="flex align-center justify-center">
            <img className="header-logo" src={logo} alt="logo sparkles" />
            <h1 className="header-title">amispelis</h1>
        </header>
    );
};

export default Header;
