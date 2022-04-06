import React from 'react';
import BackButton from './BackButton';
import LikeButton from './LikeButton';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import Button from '@mui/material/Button';


function RecipeDetails() {
    
    const params = useParams();

    const {recipes} = useContext(RecipeContext);

    const {hits} = recipes;

    const targetRecipe = hits.find(r => r.recipe.label === params.recipeID);

    const handleInstructions = () => {
      window.open(targetRecipe.recipe.url)
    }


  return (
    <div style={{paddingBottom:'50px', cursor:'pointer'}}>
        <BackButton/>
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
  )
}

export default RecipeDetails