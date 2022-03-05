import React from 'react';
import Recipe from "./Recipe";
import '../recipes.css';

export default function Recipes( {recipes} ) {
    console.log(recipes);
    return (
        <div className='recipeslist'>
            {recipes.hits && recipes.hits.map(recipe=>
                <Recipe recipe={recipe}></Recipe>)}
        
        </div>
    )
}
