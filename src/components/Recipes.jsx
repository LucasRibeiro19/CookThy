import React from 'react';
import Recipe from "./Recipe";

export default function Recipes( {recipes} ) {
    return (
        <div class="recipes">
            {recipes.hits && recipes.hits.map(recipe=>
                <Recipe recipe={recipe}></Recipe>)}
        
        </div>
    )
}
