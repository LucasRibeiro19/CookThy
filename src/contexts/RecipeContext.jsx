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
    const [recipeLike, setRecipeLike] = useState([]);
    // console.log(recipeLike);
    // console.log(like);

    const isLiked = (label) => {
        return like.some(el => el === label);
    };

    const addLike = (label, recipe) => {
        setLike((prevstate) => [...prevstate, label]);
        setRecipeLike((prevstate) => [...prevstate, recipe])
    };

    const disLike = (label, recipe) => {
        setLike((prevstate) => {
            return prevstate.filter(el => el !== label)
        })
        setRecipeLike((prevstate) => {
            return prevstate.filter(el => el !== recipe)
        })
    };

    const handleLike = (label, recipe) => {
        if(isLiked(label)){
            disLike(label, recipe);
        }else{
            addLike(label, recipe);
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
                isLiked,
                recipeLike
            }}
        >
            {children}
        </RecipeContext.Provider>
    )

}






