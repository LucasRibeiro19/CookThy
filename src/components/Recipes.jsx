import React, { useContext } from 'react';
import Recipe from "./Recipe";
import '../recipes.css';
import { RecipeContext } from '../contexts/RecipeContext';

export default function Recipes() {

    const {recipes} = useContext(RecipeContext);
    return (
        <div className="recipes">
            {recipes.hits && recipes.hits.map(recipe=>
                <Recipe recipe={recipe}></Recipe>)}
        
        </div>
    )
}
