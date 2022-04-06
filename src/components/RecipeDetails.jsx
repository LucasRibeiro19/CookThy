import React from 'react';
import BackButton from './BackButton';
import LikeButton from './LikeButton';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import  LikeContext  from '../contexts/LikeContext';
import Button from '@mui/material/Button';


function RecipeDetails() {
    
    const params = useParams();

    const { like } = useContext(LikeContext);

    const { recipes : likedRecipes} = useContext(LikeContext);
    const { recipes : reqRecipes} = useContext(RecipeContext);

    let recipes = [];

    if(like.includes(label => label === params.recipeID)){
        recipes = likedRecipes;
        console.log(recipes);
      }else{
        recipes = reqRecipes;
        console.log(recipes);
      };


    const {hits} = recipes;

    const targetRecipe = hits.find(r => r.recipe.label === params.recipeID);

    const handleInstructions = () => {
      window.open(targetRecipe.recipe.url)
    }


  return (
    <>
      <BackButton/>
      <div style={{padding:'0 24px 50px 24px'}}>
          <h1>{params.recipeID}</h1>
          <img src={targetRecipe.recipe.image} alt={targetRecipe.recipe.label} />
          <ul>
            {targetRecipe.recipe.ingredientLines.map(ingr => <li key={ingr}>{ingr}</li>)}
          </ul>
          <Button
            variant='contained'
            color='success'
            onClick={handleInstructions}
          >
            Instructions
          </Button>
          <p>{Math.floor(targetRecipe.recipe.calories)} Calories</p>
          <p>{targetRecipe.recipe.yield} Persons</p>
          <p>Preparation time : {targetRecipe.recipe.totalTime}</p>
          <p>Health Labels : {targetRecipe.recipe.healthLabels.map(healthlabel => [`#${healthlabel} `])}</p>
          <LikeButton label={params.recipeID}/>
      </div>
    </>
  )
}

export default RecipeDetails