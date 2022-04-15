import React, { createContext, useState } from "react";


export const RecipeContext = createContext()

export const RecipeContextProvider = ({children}) => {

    const [recipes, setRecipes] = useState([])
    const [nextPage, setNextPage] = useState({})
    const [display, setDisplay] = useState([]);

    const handleNextPage = (event) =>{
        setDisplay([...display, nextPage])
        setRecipes(nextPage)  
    }


    //Like Management


    const [like, setLike] = useState([]);
    const [recipeLike, setRecipeLike] = useState([]);

    const isLiked = (label) => {
        return like.some(el => el === label);
    };

    const addLike = (label, recipe) => {
        setLike((prevstate) => [...prevstate, label]);
        setRecipeLike((prevstate) => [...prevstate, recipe])
    };

    const disLike = (label, recipe) => {
        setLike((prevstate) => prevstate.filter(el => el !== label))
        setRecipeLike((prevstate) => prevstate.filter(el => el.label !== recipe.label))
    };

    const handleLike = (label, recipe) => {
        if(isLiked(label,recipe)){
            disLike(label, recipe);
        }else{
            addLike(label, recipe);
        }
    };


    return (
        <RecipeContext.Provider 
            value={{
                recipes,
                setRecipes,
                nextPage,
                setNextPage,
                handleNextPage,
                display, 
                setDisplay,
                handleLike,
                like,
                isLiked,
                recipeLike,
            }}
        >
            {children}
        </RecipeContext.Provider>
    )

}






