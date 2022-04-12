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


    //Like Management


    const [like, setLike] = useState([]);

    const isLiked = (recipe) => {
        return like.some(el => el === recipe);
    };

    const addLike = (recipe) => {
        setLike((prevstate) => [...prevstate, recipe]);
    };

    const disLike = (recipe) => {
        setLike((prevstate) => {
            return prevstate.filter(el => el !== recipe)
        })
    };

    const handleLike = (recipe) => {
        if(isLiked(recipe)){
            disLike(recipe);
        }else{
            addLike(recipe);
        }
    };

    // console.log(like);




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
                isLiked
            }}
        >
            {children}
        </RecipeContext.Provider>
    )

}






