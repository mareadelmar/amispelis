import { auth } from "../config/firebaseConfig";

export const loginService = ({ mail, pass }) => {
    return auth
        .signInWithEmailAndPassword(mail, pass)
        .then((res) => res)
        .catch((err) => {
            console.error(err);
            return err;
        });
};
