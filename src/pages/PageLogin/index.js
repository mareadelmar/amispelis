import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import "../../assets/styles/pages/PageLogin.css";
import { Input, Alert, AlertIcon } from "@chakra-ui/react";
import { useUserData } from "../../hooks/useUserData";
import Loader from "../../components/Loader";

const PageLogin = () => {
    const { getLogin, isLogged, serviceError, loading } = useUserData();
    const [pass, setPass] = useState("");
    const [mail, setMail] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass === "" || mail === "") {
            console.log("escribime los campos, reina");
            setErrorMessage("Llename los campos, mireina");
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
            return;
        }
        getLogin({ mail, pass });
    };

    console.log(isLogged);
    useEffect(() => {
        if (isLogged) pushLocation("/");
    }, [isLogged, pushLocation]);

    if (loading) return <Loader />;
    return (
        <section className="flex direction-column justify-center align-center w-100 section">
            <form onSubmit={handleSubmit} className="form-login">
                <h2 className="section-name font-trisapace">LOGIN</h2>
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
                {errorMessage && (
                    <Alert status="error">
                        <AlertIcon />
                        {errorMessage}
                    </Alert>
                )}
                {serviceError && (
                    <Alert status="error">
                        <AlertIcon />
                        {serviceError}
                    </Alert>
                )}
                <button type="submit" className="w-100 mtop-small btn btn-form">
                    Login
                </button>
            </form>
        </section>
    );
};

export default PageLogin;
