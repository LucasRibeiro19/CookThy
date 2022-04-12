import React from 'react';
import { useContext } from 'react';
import {RecipeContext} from '../contexts/RecipeContext';


function LikedRecipes() {
  
  const {like} = useContext(RecipeContext);
  

  return (
    <div style={{padding:'0 24px 0 24px'}}>
      <h1>{like.length} recipes liked </h1>
      <p>{like}</p>
    </div>
  )
}

export default LikedRecipes