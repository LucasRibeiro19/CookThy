import { createContext, useState } from "react";

const LikeContext =  createContext();

export const LikeContextProvider = ({children}) => {

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
    console.log(like);


    return (
        <LikeContext.Provider
            value={{
                like,
                handleLike,
                isLiked,
            }}
        >
            {children}
        </LikeContext.Provider>
    )
}

export default LikeContext;