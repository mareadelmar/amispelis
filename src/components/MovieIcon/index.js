import React from "react";
import { Icon } from "@iconify/react";

const movieIcon = ({ icon }) => {
    if (icon === "drama") {
        return <Icon icon="openmoji:crying-face" width="40" height="40" />;
    }
    if (icon === "comedia") {
        return <Icon icon="openmoji:clown-face" width="40" height="40" />;
    }
    if (icon === "suspenso") {
        return <Icon icon="openmoji:anguished-face" width="40" height="40" />;
    }
    if (icon === "terror") {
        return <Icon icon="openmoji:jack-o-lantern" width="40" height="40" />;
    }
    if (icon === "documental") {
        return <Icon icon="openmoji:nerd-face" width="40" height="40" />;
    }
    if (icon === "cienciaFiccion") {
        return <Icon icon="openmoji:mechanical-arm" width="40" height="40" />;
    }
    if (icon === "ganasDeVivir") {
        return <Icon icon="openmoji:heart-on-fire" width="40" height="40" />;
    }
    if (icon === "cambalache") {
        return (
            <Icon
                icon="openmoji:mermaid-light-skin-tone"
                width="40"
                height="40"
            />
        );
    }
    if (icon === "serie") {
        return <Icon icon="openmoji:puzzle-piece" width="40" height="40" />;
    }
};

export default movieIcon;
