import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import "../../assets/styles/pages/PageLogin.css";
import { Input } from "@chakra-ui/react";
import { useUserData } from "../../hooks/useUserData";
import UserContext from "../../context/UserDataContext";

const PageLogin = () => {
    const { getLogin, isLogged } = useUserData(UserContext);
    const [pass, setPass] = useState("");
    const [mail, setMail] = useState("");
    const [path, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        getLogin({ mail, pass });
    };

    console.log(isLogged);
    useEffect(() => {
        if (isLogged) pushLocation("/");
    }, [isLogged, pushLocation]);

    return (
        <section className="flex direction-column justify-center align-center w-100 section">
            <form onSubmit={handleSubmit} className="form-login">
                <div className="mtop-small">
                    <label htmlFor="email" className="w-100">
                        Email:
                    </label>
                    <Input
                        type="text"
                        id="email"
                        className="w-100"
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>

                <div className="mtop-small">
                    <label htmlFor="password">Password:</label>
                    <Input
                        type="password"
                        id="password"
                        className="w-100"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>

                <button type="submit" className="w-100 mtop-small btn btn-form">
                    Login
                </button>
            </form>
        </section>
    );
};

export default PageLogin;
