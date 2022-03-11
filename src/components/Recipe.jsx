import React from 'react'

export default function Recipe( {recipe} ) {

    return (
        <div>
            <figure>
                <img height='200px' src={recipe.recipe.image}></img>
                <figcaption> {recipe.recipe.label} </figcaption>
            </figure>
        </div>
    )
}
