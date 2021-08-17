import { useState, useContext, useEffect, useCallback } from "react";
import { loginService } from "../services/loginService";
import { logoutService } from "../services/logoutService";
import { auth } from "../config/firebaseConfig";
import UserContext from "../context/UserDataContext";

export const useUserData = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serviceError, setServiceError] = useState(null);

    const getLogin = useCallback(({ mail, pass }) => {
        setLoading(true);
        loginService({ mail, pass })
            .then((data) => {
                if (data.user) {
                    //setUserData(data);
                    setLoading(false);
                    return;
                }
                if (data.code) {
                    console.log(data.code, data.message);
                    setServiceError(data.code);
                    //setUserData(null);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error(err);
                console.log(err);
                //setUserData(null);
                setLoading(false);
            });
    }, []);

    const getLogout = useCallback(() => {
        setLoading(true);
        logoutService()
            .then(() => {
                //setUserData(null);
                //setIsLogged(false);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                //setUserData(null);
                //setIsLogged(false);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user.email, "está logueado");
                setIsLogged(true);
                setUserData(user);
                setLoading(false);
            } else {
                console.log("no hay nadie logueado");
                setIsLogged(false);
                setUserData(null);
                setLoading(false);
            }
        });
    }, [setUserData]);

    return {
        getLogin,
        getLogout,
        loading,
        isLogged,
        userData,
        serviceError,
    };
};
