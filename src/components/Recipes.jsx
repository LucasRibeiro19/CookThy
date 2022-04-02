import React from 'react';
import Recipe from "./Recipe";
import './recipes.css'


export default function Recipes( {recipes} ) {

    //const rcp = display && display.map(recipes => recipes.hits && recipes.hits);
    //console.log(rcp)

    return (
        <>
        <div >
            <div className='recipes'>
            { recipes.hits && recipes.hits
                .map(recipe=><Recipe recipe={recipe}></Recipe>)}    
            </div>   
        </div>
        </>
    )
}

