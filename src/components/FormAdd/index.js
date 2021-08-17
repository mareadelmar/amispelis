import React, { useState, useContext } from "react";
import "../../assets/styles/components/FormAdd.css";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { getMovieData } from "../../services/getMovieData";
import { db } from "../../config/firebaseConfig";
import { useUserData } from "../../hooks/useUserData";
import AllMoviesContext from "../../context/AllMoviesContext";
import { useLocation } from "wouter";
import SelectGenre from "../SelectGenre";
import TextareaComments from "../TextareaComments";
import InputMovie from "../InputMovie";

const FormAdd = () => {
    const { allMovies, setAllMovies } = useContext(AllMoviesContext);
    const { userData } = useUserData();
    const [imdbUrl, setImdbUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [movieGenre, setMovieGenre] = useState("");
    const [comments, setComments] = useState("");
    const [, pushLocation] = useLocation();

    const handleChangeUrl = (e) => {
        setImdbUrl(e.target.value);
    };

    const handleChangeSelect = (e) => {
        setMovieGenre(e.target.value);
    };

    const handleChangeTextarea = (e) => {
        setComments(e.target.value);
    };

    const handleSumitAdd = (e) => {
        e.preventDefault();

        if (imdbUrl === "" || movieGenre === "") {
            setErrorMessage("escribime los campos, reina");
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
            return;
        }

        getMovieData({ imdbUrl }).then((data) => {
            data.date = new Date().toISOString();
            if (comments !== "") {
                data.comments = comments;
            }
            data.icon = movieGenre;

            const dbRef = db.collection("movie-list");
            dbRef
                .doc(userData.uid)
                .collection("userMovieList")
                .add(data)
                .then((doc) => {
                    console.log("subido", doc);
                    setAllMovies([...allMovies, data]);
                    pushLocation("/");
                })
                .catch((err) => {
                    console.error(err);
                    setErrorMessage(
                        "Hubo un problema para cargar la peli a la lista"
                    );
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 3000);
                });
        });
        //const aver = movieId !== "" ? getMovieData({ movieId }) : null;
    };

    return (
        <section className="section flex direction-column align-center">
            <form className="form-add mtop-large" onSubmit={handleSumitAdd}>
                <InputMovie handleChangeUrl={handleChangeUrl} />
                <SelectGenre handleChangeSelect={handleChangeSelect} />
                <TextareaComments handleChangeTextarea={handleChangeTextarea} />

                {errorMessage !== "" && (
                    <Alert status="error">
                        <AlertIcon />
                        {errorMessage}
                    </Alert>
                )}
                <button type="submit" className="btn btn-form mtop-small">
                    Listorti
                </button>
            </form>
        </section>
    );
};

export default FormAdd;
