import React, { createContext, useState } from "react";


export const RecipeContext = createContext()

export const RecipeContextProvider = ({children}) => {





return (
    <RecipeContext.Provider>
        {children}
    </RecipeContext.Provider>
    )

}






