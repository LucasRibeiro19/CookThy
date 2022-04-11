import React, { useContext } from 'react';
import Recipes from "./Recipes";
import { RecipeContext } from '../contexts/RecipeContext';

export default function Display() {

    const {display} = useContext(RecipeContext);

    return (
        <div>
            {display && display.map((recipes, index)=>
                <Recipes recipes={recipes} key={index}></Recipes>)}
        
        </div>
    )
}
