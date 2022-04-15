import React from 'react';
import BackButton from './BackButton';
import Header from './Header';
import LikeButton from './LikeButton';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import Button from '@mui/material/Button';


function RecipeDetails() {
    
    const params = useParams();

    const {recipes, recipeLike, isLiked} = useContext(RecipeContext);


    const {hits} = recipes;

    let targetRecipe = [];

    if (isLiked(params.recipeID)) {
      targetRecipe = recipeLike[0]
    }else{
      targetRecipe = hits.find(r => r.recipe.label === params.recipeID).recipe;
    }

    console.log(targetRecipe);
  

    const handleInstructions = () => {
      window.open(targetRecipe.url)
    }

  return (
    <>
      <Header/>
      <BackButton label={targetRecipe.label} recipe={targetRecipe}/>
      <div style={{padding:'0 24px 50px 24px'}}>
          <h1>{params.recipeID}</h1>
          <img src={targetRecipe.image} alt={targetRecipe.label} />
          <ul>
            {targetRecipe.ingredientLines.map(ingr => <li key={ingr}>{ingr}</li>)}
          </ul>
          <Button
            variant='contained'
            color='success'
            onClick={handleInstructions}
          >
            Instructions
          </Button>
          <p>{Math.floor(targetRecipe.calories)} Calories</p>
          <p>{targetRecipe.yield} Persons</p>
          <p>Preparation time : {targetRecipe.totalTime === 0 ? "Unknown" : `${targetRecipe.totalTime} minutes`}</p>
          <p>Health Labels : {targetRecipe.healthLabels.map(healthlabel => [`#${healthlabel} `])}</p>
          <LikeButton label={params.recipeID} recipe={targetRecipe}/>
      </div>
    </>
  )
}

export default RecipeDetails