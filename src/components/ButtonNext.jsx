import React from 'react'
import Button from '@mui/material/Button';

export default function ButtonNext( {recipes} ) {
    console.log(recipes.to)
    return (
        <div>
            <Button variant="outlined">See next recipes {recipes.from}-{recipes.to}</Button>
        </div>
    )
}
