import React from 'react';
import Recipe from "./Recipe";
import './recipes.css'


export default function Recipes( {recipes} ) {

    //let flt =  recipes.hits
    //                .filter(recipe=>filters.every(filter=>recipe.recipe.healthLabels.includes(filter)))
    //console.log(flt)

    return (
        <>
        <div >
            <div className='recipes'>
            {recipes.hits && recipes.hits
                //.filter(recipe=>filters.every(filter=>recipe.recipe.healthLabels.includes(filter)))
                .map(recipe=><Recipe recipe={recipe}></Recipe>)}    
            </div>   
        </div>
        </>
    )
}
