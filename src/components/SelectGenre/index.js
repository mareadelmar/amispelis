import React from "react";
import { Select } from "@chakra-ui/react";

const SelectGenre = ({ handleChangeSelect }) => {
    return (
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
    );
};

export default SelectGenre;
