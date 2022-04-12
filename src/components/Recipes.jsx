import React, { useContext } from 'react';
import Recipe from "./Recipe";
import '../recipes.css';

export default function Recipes( {recipes} ) {

    return (
        <div className='recipeslist'>
            {recipes.hits && recipes.hits.map((recipe, index)=>
                <Recipe recipe={recipe} key={index}></Recipe>)}
        
        </div>
        
    )
}

