import React, { createContext, useState } from "react";


export const RecipeContext = createContext()

export const RecipeContextProvider = ({children}) => {

    const [recipes, setRecipes] = useState([])

    // console.log(recipes);


    return (
        <RecipeContext.Provider 
            value={{
                recipes,
                setRecipes
            }}
        >
            {children}
        </RecipeContext.Provider>
    )

}






