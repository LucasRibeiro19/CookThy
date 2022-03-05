import React from 'react'

export default function Recipe( {recipe} ) {


    return (
        <div>
            <figure>
                <img src={recipe.recipe.image}></img>
            </figure>
        </div>
    )
}
