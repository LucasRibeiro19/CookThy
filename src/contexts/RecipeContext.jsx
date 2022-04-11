import React, { createContext, useState } from "react";


export const RecipeContext = createContext()

export const RecipeContextProvider = ({children}) => {

    const [recipes, setRecipes] = useState([])
    const [nextPage, setNextPage] = useState({})
    const [display, setDisplay] = useState([]);

    const handleNextPage = (event) =>{
        setRecipes(nextPage)
        setDisplay([...display, recipes])
      }


    return (
        <RecipeContext.Provider 
            value={{
                recipes,
                setRecipes,
                nextPage,
                setNextPage,
                handleNextPage,
                display, 
                setDisplay
            }}
        >
            {children}
        </RecipeContext.Provider>
    )

}






