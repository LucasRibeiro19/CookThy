import React from 'react';
import LikedRecipe from './LikedRecipe';
import Header from './Header';
import { useContext } from 'react';
import {RecipeContext} from '../contexts/RecipeContext';



function LikedRecipes() {
  
  const {recipeLike} = useContext(RecipeContext);

  console.log(recipeLike);
  

  return (
    <>
      <Header/>
      <div style={{padding:'0 24px 50px 24px', width:'calc(100% - 48px)'}}>
        <h1 style={{fontFamily:"Poppins",  color:'#01937C', fontWeight:'bold'}}>{recipeLike.length} recipes liked </h1>
        {recipeLike.map((likedRecipe, index) => <LikedRecipe recipeLike={likedRecipe} key={index}/>)}
      </div>
    </>
  )
}

export default LikedRecipes