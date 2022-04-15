import React, { useContext } from 'react'
import FavouriteButton from './LikeButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RecipeContext } from '../contexts/RecipeContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LikedRecipe({recipeLike}) {

    const navigate = useNavigate();
    const {handleLike} = useContext(RecipeContext);

    const handleDetails = () => {
      navigate(`/Recipe/${recipeLike.label}`)
  }

    const style = {
      // width: 'calc(100% - 24px)',
      display:'flex',
      padding: '1em',
      border: '1px solid black',
      borderRadius: '4px',
    };

  return (
    <>
    <div style={style}>
      <img style={{width:'10%'}} src={recipeLike.image} alt={recipeLike.label} />
      <p>{recipeLike.label}</p>
      <Button
          sx={{width:'50%'}}
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