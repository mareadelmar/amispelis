import { auth } from "../config/firebaseConfig";

export function logoutService() {
    return auth
        .signOut()
        .then(() => {
            // Sign-out successful.
            console.log("sesión cerrada");
        })
        .catch((error) => {
            // An error happened.
            console.error(error);
        });
}
