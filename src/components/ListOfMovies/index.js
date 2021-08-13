import React from "react";
import "../../assets/styles/components/ListOfMovies.css";
import Card from "../Card";

const ListOfMovies = ({ list }) => {
    console.log(list);
    return (
        <div className="flex cards-container mtop-large">
            {list.map((item) => {
                return <Card movieData={item} key={item.id} />;
            })}
        </div>
    );
};

export default ListOfMovies;
