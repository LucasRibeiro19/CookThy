import React, { useContext } from 'react';
import Recipe from "./Recipe";
import '../recipes.css';
import { RecipeContext } from '../contexts/RecipeContext';

export default function Recipes() {

    const {recipes} = useContext(RecipeContext);
    // console.log(recipes);
    return (
        <div className='recipeslist'>
            {recipes.hits && recipes.hits.map(recipe=>
                <Recipe recipe={recipe}></Recipe>)}
        
        </div>
    )
}