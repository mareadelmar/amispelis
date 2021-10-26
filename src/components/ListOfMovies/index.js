import React, { useState, useEffect, useContext } from "react";
import "../../assets/styles/components/ListOfMovies.css";
import { getAllMoviesDB } from "../../services/getAllMoviesDB";
import AllMoviesContext from "../../context/AllMoviesContext";
//import { useUserList } from "../../hooks/useUserList";
import Card from "../Card";
import Loader from "../Loader";

const ListOfMovies = ({ user }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const { setAllMovies } = useContext(AllMoviesContext);

    useEffect(() => {
        setLoading(true);
        if (user) {
            getAllMoviesDB({ user })
                .then((data) => {
                    setMovies(data);
                    setAllMovies(data);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        }
    }, [user, setAllMovies]);

    if (loading) return <Loader />;
    return (
        <div className="flex cards-container justify-center">
            {movies.length >= 1 &&
                movies.map((item) => {
                    return <Card movieData={item} key={item.Title} />;
                })}
        </div>
    );
};

export default ListOfMovies;
