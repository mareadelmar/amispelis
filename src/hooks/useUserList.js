import { useContext, useState } from "react";
import AllMoviesContext from "../context/AllMoviesContext";
import { getAllMoviesDB } from "../services/getAllMoviesDB";

export const useUserList = () => {
    const { allMovies, setAllMovies } = useContext(AllMoviesContext);

    const movieList = ({ user }) => {
        getAllMoviesDB({ user })
            .then((res) => {
                console.log(res);
                setAllMovies(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return {
        movieList,
    };
};
