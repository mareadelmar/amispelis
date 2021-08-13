import React, { useState, useContext } from "react";
import "../../assets/styles/components/FormAdd.css";
import { Input, Select, Textarea } from "@chakra-ui/react";
import { getMovieData } from "../../services/getMovieData";
import AllMoviesContext from "../../context/AllMoviesContext";
import { useLocation } from "wouter";

const FormAdd = () => {
    const { allMovies, setAllMovies } = useContext(AllMoviesContext);
    const [imdbUrl, setImdbUrl] = useState("");
    const [movieGenre, setMovieGenre] = useState("");
    const [comments, setComments] = useState("");
    const [, pushLocation] = useLocation();

    const handleChangeUrl = (e) => {
        console.log(e.target.value);
        setImdbUrl(e.target.value);
    };

    const handleChangeSelect = (e) => {
        console.log(e.target.value);
        setMovieGenre(e.target.value);
    };

    const handleSumitAdd = (e) => {
        e.preventDefault();

        if (imdbUrl === "" || movieGenre === "") {
            console.log("escribime los campos, reina");
            return;
        }

        getMovieData({ imdbUrl }).then((data) => {
            if (comments !== "") {
                data.comments = comments;
            }
            data.icon = movieGenre;
            console.log(data);
            setAllMovies([...allMovies, data]);
            pushLocation("/");
        });
        //const aver = movieId !== "" ? getMovieData({ movieId }) : null;
    };

    return (
        <section className="flex direction-column align-center">
            <form className="form-add mtop-large" onSubmit={handleSumitAdd}>
                <label htmlFor="input-url">URL de IMDb:</label>
                <Input
                    className="mtop-small"
                    id="input-url"
                    placeholder="URL..."
                    onChange={handleChangeUrl}
                />

                <Select
                    className="mtop-small"
                    placeholder="Select option"
                    onChange={handleChangeSelect}
                >
                    <option value="drama">Drama</option>
                    <option value="comedia">Comedia</option>
                    <option value="suspenso">Suspenso/Thriller</option>
                    <option value="terror">Terror</option>
                    <option value="documental">Documental</option>
                    <option value="cienciaFiccion">Ciencia Ficción</option>
                    <option value="ganasDeVivir">Ganas de vivir</option>
                    <option value="cambalache">Cambalache</option>
                    <option value="serie">Serie</option>
                </Select>

                <div className="mtop-small">
                    <label htmlFor="input-comments">Comentarios:</label>
                    <Textarea
                        className="mtop-small"
                        id="input-comments"
                        placeholder="Here is a sample placeholder"
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-form mtop-small">
                    Listorti
                </button>
            </form>
        </section>
    );
};

export default FormAdd;
