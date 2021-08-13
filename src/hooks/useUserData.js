import { useState, useContext, useEffect } from "react";
import { loginService } from "../services/loginService";
import { auth } from "../config/firebaseConfig";
import UserContext from "../context/UserDataContext";

export const useUserData = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(false);

    const getLogin = ({ mail, pass }) => {
        setLoading(true);
        loginService({ mail, pass })
            .then((userData) => {
                console.log(userData);
                setUserData(userData);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setUserData(null);
                setLoading(false);
            });
    };

    useEffect(() => {
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
        loading,
        isLogged,
    };
};
