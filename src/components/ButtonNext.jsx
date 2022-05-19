import React from 'react'
import Button from '@mui/material/Button';


export default function ButtonNext( {recipes, handleNextPage} ) {
    // console.log(recipes.to)
    return (
        <div style={{textAlign:'center',paddingBottom:'50px'}} > 
        {(recipes.to !== 0 && recipes.to < recipes.count) && <Button        
                    variant='outlined' 
                    color='success'
                    onClick={handleNextPage}
                    >See {recipes.to-recipes.from+1} next recipes</Button>}
        </div>
    )
}
