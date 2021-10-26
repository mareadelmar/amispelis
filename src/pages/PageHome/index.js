import React from "react";
import "../../assets/styles/pages/PageHome.css";
import { useLocation } from "wouter";
import { useUserData } from "../../hooks/useUserData";
import ListOfMovies from "../../components/ListOfMovies";
import Loader from "../../components/Loader";

const PageHome = () => {
    //const { allMovies } = useContext(AllMoviesContext);
    const [, pushLocation] = useLocation();
    const { isLogged, userData, loading } = useUserData();

    const handleClickAdd = () => {
        console.log("agregar película");
        if (!isLogged) {
            return pushLocation("/login");
        }
        pushLocation("/add");
    };

    const userId = userData ? userData.uid : null;
    if (loading) return <Loader />;
    return (
        <>
            <div className="section home-container flex direction-column align-center mtop-large">
                <div className="home-splash">
                    <p className="card-title">HOLA AMIGAS</p>
                    <div>
                        <img
                            src="https://media.giphy.com/media/IFyK4yOL69bpe/source.gif"
                            alt="gif"
                            className="w-100"
                        />
                    </div>
                </div>
                <div className="home-splash mtop-medium">
                    <p className="font-trisapace">
                        Para agragar películas a esta bella lista necesitás el
                        link de IMDb &#40;está hasta Intrusos en IMDb, así que
                        esperemos que sea suficiente&#41;.
                    </p>
                    <button
                        onClick={handleClickAdd}
                        className="btn mtop-small w-100"
                    >
                        Agregar película
                    </button>
                </div>
            </div>
            {!isLogged ? null : (
                <div className="mtop-large">
                    <h2 className="section-name font-trisapace">
                        PELÍCULAS AGREGADAS
                    </h2>
                    <ListOfMovies user={userId} />
                </div>
            )}
        </>
    );
};

export default PageHome;
