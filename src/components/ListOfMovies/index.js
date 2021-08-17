import React, { useState, useEffect } from "react";
import "../../assets/styles/components/ListOfMovies.css";
import { getAllMoviesDB } from "../../services/getAllMoviesDB";

import Card from "../Card";

const ListOfMovies = ({ user }) => {
    const [movies, setMovies] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (user) {
            getAllMoviesDB({ user })
                .then((data) => {
                    setMovies(data);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        }
    }, [user]);

    if (loading) return <p>cargando...</p>;
    return (
        <div className="flex cards-container">
            {movies.length >= 1 &&
                movies.map((item) => {
                    return <Card movieData={item} key={item.Title} />;
                })}
        </div>
    );
};

export default ListOfMovies;
