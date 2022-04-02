import React from 'react'
import Button from '@mui/material/Button';

export default function ButtonNext( {recipes, handleNextPage} ) {
    console.log(recipes.to)
    return (
        <div>
            <Button variant="outlined" onClick={handleNextPage}>See next recipes {recipes.from}-{recipes.to}</Button>
        </div>
    )
}
