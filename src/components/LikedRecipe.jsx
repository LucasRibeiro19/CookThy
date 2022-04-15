import React, { useContext } from 'react'
import FavouriteButton from './LikeButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RecipeContext } from '../contexts/RecipeContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LikedRecipe({recipeLike}) {

    const navigate = useNavigate();

    console.log(recipeLike);
    const {handleLike} = useContext(RecipeContext);

    const handleDetails = () => {
      navigate(`/Recipe/${recipeLike.label}`)
  }

    const style = {
      // width: 'calc(100% - 24px)',
      display:'flex',
      justifyContent: "space-around",
      alignItems : "center",
      padding: '1em',
      border: '1px solid #FF5A19',
      borderRadius: '4px',
      
    };

  return (
    <>
    <div style={style}>
      <img style={{width:'10%'}} src={recipeLike.image} alt={recipeLike.label} />
      <p style={{fontWeight: "medium"}}>{recipeLike.label}</p>
      <Button
          sx={{width:'10%', height:'30%'}}
          onClick={handleDetails}
          variant='contained'
          color='success'
        >Show Details
      </Button>
      <DeleteIcon onClick={()=> handleLike(recipeLike.label, recipeLike)}/>
    </div>
    </>
  )
}

export default LikedRecipe