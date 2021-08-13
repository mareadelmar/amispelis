import React, { useState } from "react";

const AllMoviesContext = React.createContext({});

export const AllMoviesContextProvider = ({ children }) => {
    const [allMovies, setAllMovies] = useState([]);
    console.log(allMovies);

    return (
        <AllMoviesContext.Provider value={{ allMovies, setAllMovies }}>
            {children}
        </AllMoviesContext.Provider>
    );
};

export default AllMoviesContext;
