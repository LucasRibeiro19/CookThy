import React from 'react'
import Button from '@mui/material/Button';


export default function ButtonNext( {recipes, handleNextPage} ) {
    console.log(recipes.to)
    return (
        <div style={{textAlign:'center',paddingBottom:'50px'}} > 
        {(recipes.to !== 0 && recipes.to < recipes.count) && <Button        
                    variant="contained" 
                    color='success'
                    onClick={handleNextPage}
                    >See next recipes {recipes.from}-{recipes.to}</Button>}
        </div>
    )
}
