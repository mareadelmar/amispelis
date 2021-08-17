import React from "react";
import { Input } from "@chakra-ui/react";

const InputMovie = ({ handleChangeUrl }) => {
    return (
        <>
            <label htmlFor="input-url">URL de IMDb:</label>
            <Input
                id="input-url"
                placeholder="URL..."
                onChange={handleChangeUrl}
            />
        </>
    );
};

export default InputMovie;
