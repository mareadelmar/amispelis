import React from "react";
import "../../assets/styles/components/Card.css";

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
        <div className="card border">
            <div className="border border-large flex align-center">
                <div className="card-img">
                    <img src={Poster} alt={Title} />
                </div>
                <div className="flex direction-column">
                    <h4>{Title}</h4>
                    <img src="" alt="genre movie icon" />
                    {[Actors, Director, Runtime, Year].map((item) => {
                        return <p key={item}>{item}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card;
