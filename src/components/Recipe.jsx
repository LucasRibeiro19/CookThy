import React from 'react'
import RecipeCard from './RecipeCard'

export default function Recipe( {recipe} ) {


    return (
        <>
            {/* <figure>
                <img src={recipe.recipe.image}></img>
            </figure> */}

            <RecipeCard recipe={recipe}/>
        </>
    )
}
