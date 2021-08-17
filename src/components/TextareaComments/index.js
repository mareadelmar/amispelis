import React from "react";
import { Textarea } from "@chakra-ui/react";

const TextareaComments = ({ handleChangeTextarea }) => {
    return (
        <div className="mtop-small">
            <label htmlFor="input-comments">Comentarios:</label>
            <Textarea
                id="input-comments"
                placeholder="Comentario opcional..."
                onChange={handleChangeTextarea}
            />
        </div>
    );
};

export default TextareaComments;
