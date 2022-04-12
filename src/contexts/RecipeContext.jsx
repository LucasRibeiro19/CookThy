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

    const [like, setLike] = useState([]);

    const isLiked = (label) => {
        return like.some(el => el === label);
    };

    const addLike = (label) => {
        setLike((prevstate) => [...prevstate, label]);
    };

    const disLike = (label) => {
        setLike((prevstate) => {
            return prevstate.filter(el => el !== label)
        })
    };

    const handleLike = (label) => {
        if(isLiked(label)){
            disLike(label);
        }else{
            addLike(label);
        }
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






