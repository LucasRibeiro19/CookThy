import { createContext, useState, useContext } from "react";
import { RecipeContext } from "./RecipeContext";


const LikeContext =  createContext();


export const LikeContextProvider = ({children}) => {
    
    const [like, setLike] = useState([]);
    const {recipes : reqRecipes} = useContext(RecipeContext);
    const likedRecipes = [];

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
//trouver la recette liké dans reqRecipes
//push cette recette dans likedRecipes


        if(isLiked(label)){
            disLike(label);
        }else{
            addLike(label);
        }
    }
    console.log(like);


    return (
        <LikeContext.Provider
            value={{
                like,
                handleLike,
                isLiked,
                likedRecipes,
            }}
        >
            {children}
        </LikeContext.Provider>
    )
}

export default LikeContext;