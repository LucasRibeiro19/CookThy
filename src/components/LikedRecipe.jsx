import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { RecipeContext } from '../contexts/RecipeContext';
import { Button } from '@mui/material';
import '../likedrecipe.css';

function LikedRecipe({recipeLike}) {

    const navigate = useNavigate();

    console.log(recipeLike);
    const {handleLike} = useContext(RecipeContext);

    const handleDetails = () => {
      navigate(`/Recipe/${recipeLike.label}`)
  }

  return (
    <>
    <div style={{display: "flex", justifyContent:"center"}}>
    <div className='liked-recipe'>
      <img  src={recipeLike.image} alt={recipeLike.label} />
      <p style={{fontWeight: "medium", fontFamily: "Poppins"}}>{recipeLike.label}</p>
      <div className='buttons-container' >
      <Button
          sx={{width:"150px", marginRight:"1em"}}
          onClick={handleDetails}
          variant='contained'
          color='success'
        >Show Details
      </Button>
      <DeleteIcon sx={{cursor: 'pointer'}} onClick={()=> handleLike(recipeLike.label, recipeLike)}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default LikedRecipe