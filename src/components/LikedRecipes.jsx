import React from 'react';
import LikedRecipe from './LikedRecipe';
import Header from './Header';
import { useContext } from 'react';
import {RecipeContext} from '../contexts/RecipeContext';
import { Typography } from '@mui/material';



function LikedRecipes() {
  
  const {recipeLike} = useContext(RecipeContext);

  

  return (
    <>
      <Header/>
      <div style={{padding:'0 24px 50px 24px', width:'calc(100% - 48px)'}}>
      <Typography
        variant="h2"
        fontFamily="Poppins"
        color='#01937C'
        component="div"
        sx={{  display: {fontWeight:'bold'}, padding:"5%" }} 
      > {recipeLike.length} recipes liked
      </Typography>
        {recipeLike.map((likedRecipe, index) => <LikedRecipe recipeLike={likedRecipe} key={index}/>)}
      </div>
    </>
  )
}

export default LikedRecipes