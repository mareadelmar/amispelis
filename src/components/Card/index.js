import React from "react";
import "../../assets/styles/components/Card.css";
import MovieIcon from "../MovieIcon";

const Card = ({ movieData }) => {
    console.log(movieData);
    const {
        Title,
        Actors,
        Country,
        Director,
        Language,
        Plot,
        Runtime,
        Poster,
        Year,
        imdbID,
        imdbRating,
        icon,
    } = movieData;

    if (movieData.icon || movieData.comments) console.log(movieData);
    return (
        <div className="card flex">
            <div className="card-img">
                <img src={Poster} alt={Title} />
            </div>
            <div className="flex direction-column">
                <div className="flex align-center">
                    <MovieIcon icon={icon} />
                    <strong>
                        <h4 className="card-title">{Title}</h4>
                    </strong>
                </div>
                <p className="py-small">
                    <strong>Año: </strong>
                    {Year}
                </p>
                <p className="py-small">
                    <strong>Cast: </strong>
                    {Actors}
                </p>
                <p className="py-small">
                    <strong>Directorx: </strong>
                    {Director}
                </p>
                <p className="py-small">
                    <strong>Duración: </strong>
                    {Runtime}
                </p>
            </div>
        </div>
    );
};

export default Card;
