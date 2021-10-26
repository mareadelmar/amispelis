import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loader = () => {
    return (
        <section className="section flex align-center justify-center">
            {/* <h4 className="section-name">CARGANDO...</h4> */}
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="pink.500"
                size="xl"
            />
        </section>
    );
};

export default Loader;
