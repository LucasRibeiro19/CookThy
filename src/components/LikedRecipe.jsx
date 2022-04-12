import React from 'react'

function LikedRecipe({likedRecipe}) {

    console.log(likedRecipe);
    const {recipe} = likedRecipe;
  return (
    <div>{recipe.label}</div>
  )
}

export default LikedRecipe