import React, { createContext, useState } from 'react';



export const FilterContext = createContext();


export const FilterContextProvider = ({ children }) => {



    return (
        <FilterContext.Provider>
            { children }
        </FilterContext.Provider>
    )

}




