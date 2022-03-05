import React, { createContext, useState } from "react";


export const RecipeContext = createContext()

export const RecipeContextProvider = ({children}) => {

    const [recipes, setRecipes] = useState([])


    return (
        <RecipeContext.Provider 
            value={{

            }}
        >
            {children}
        </RecipeContext.Provider>
    )

}






