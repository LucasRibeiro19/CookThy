import React from "react";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from 'react'


function HomeSearchbar() {

    const {handleInterTerm} = useContext(SearchContext);
    console.log(1)
    return ( 
        <>
        <input placeholder="Blablabla" onChange={handleInterTerm}/>
        </>
     );
}

export default HomeSearchbar;