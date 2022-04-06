import React from 'react';
import { useContext } from 'react';
import LikeContext from '../contexts/LikeContext';


function LikedRecipes() {
  
  const {like} = useContext(LikeContext)

  return (
    <div>
      {like.length} recipes Liked 
    </div>
  )
}

export default LikedRecipes