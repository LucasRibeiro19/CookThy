import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import Header from './Header';
import BackButton from './BackButton';
import LikeButton from './LikeButton';
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
  

    const handleInstructions = () => {
      window.open(targetRecipe.url)
    }

    const style = {
      display:'flex',
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems : "center",
      padding: '1em',
      borderRadius: '4px',
      backgroundColor : "white",
      maxWidth: '600px',
      margin: '25px',
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      fontFamily: "Poppins",
      fontWeight: 'bold'
      
    };

  return (
    <>
      <Header/>
      <BackButton label={targetRecipe.label} recipe={targetRecipe}/>
      <div style={{padding:'0 24px 50px 24px', display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <h2 style={{fontFamily:"Poppins"}}>{params.recipeID}</h2>
          <div style={{margin:'0 25px 0 25px', maxWidth:'450px'}}>
            <img style={{borderRadius: '4px', width:'100%'}}  src={targetRecipe.image} alt={targetRecipe.label} />
          </div>
          <div style={style}>
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
      </div>
    </>
  )
}

export default RecipeDetails