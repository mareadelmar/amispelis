import { db } from "../config/firebaseConfig";

export function getAllMoviesDB({ user }) {
    console.log(user);
    const dbRef = db
        .collection("movie-list")
        .doc(user)
        .collection("userMovieList");
    return dbRef
        .get()
        .then((doc) => {
            if (doc) {
                let moviesArray = [];
                doc.forEach((item) => {
                    moviesArray.push(item.data());
                    console.log(item.data());
                });
                console.log(moviesArray);
                return moviesArray;
            } else {
                console.log("not found");
            }
        })
        .catch((err) => console.error(err));
}
