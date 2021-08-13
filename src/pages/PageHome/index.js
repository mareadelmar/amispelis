import React, { useContext } from "react";
import "../../assets/styles/pages/PageHome.css";
import { useLocation } from "wouter";
import AllMoviesContext from "../../context/AllMoviesContext";
import { useUserData } from "../../hooks/useUserData";
import ListOfMovies from "../../components/ListOfMovies";

const PageHome = () => {
    const { allMovies } = useContext(AllMoviesContext);
    const [, pushLocation] = useLocation();
    const { isLogged } = useUserData();

    const handleClickAdd = () => {
        console.log("agregar película");
        pushLocation("/add");
    };

    return (
        <section className="section">
            <div className="home-container flex mtop-large">
                <div className="home-splash">holis</div>
                <div className="home-splash">
                    <p>agregar pelis</p>
                    <button onClick={handleClickAdd} className="btn">
                        Agregar
                    </button>
                </div>
            </div>
            {allMovies === [] || !isLogged ? null : (
                <ListOfMovies list={allMovies} />
            )}
        </section>
    );
};

export default PageHome;
