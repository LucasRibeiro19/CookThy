import React from 'react';
import LikedRecipe from './LikedRecipe';
import { useContext } from 'react';
import {RecipeContext} from '../contexts/RecipeContext';



function LikedRecipes() {
  
  const {like} = useContext(RecipeContext);

  // console.log(like);
  

  return (
    <>
      <div style={{padding:'0 24px 50px 24px', width:'calc(100% - 48px)'}}>
        <h1>{like.length} recipes liked </h1>
        {like.map(likedRecipe => <LikedRecipe likedRecipe={likedRecipe}/>)}
      </div>
    </>
  )
}

export default LikedRecipes