import React, { useState } from "react";
// import useRequestData from "../../hooks/useRequestData";
import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
    // const [cart, setCart] = useState([]);
    const [listaCapturados, setListaCapturados] = useState([])

    // const values = {
    //     cart,
    //     setCart,
    //     productsList
    // };
    const values = {
        listaCapturados,
        setListaCapturados
    }

    const Provider = GlobalContext.Provider;

    return <Provider value={values}>{props.children}</Provider>;
}
