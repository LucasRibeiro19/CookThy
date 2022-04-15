import React, { useContext } from 'react'
import FavouriteButton from './LikeButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RecipeContext } from '../contexts/RecipeContext';

function LikedRecipe({recipeLike}) {

    console.log(recipeLike);
    const {handleLike} = useContext(RecipeContext);

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
      <DeleteIcon onClick={()=> handleLike(recipeLike.label, recipeLike)}/>
    </div>
    </>
  )
}

export default LikedRecipe