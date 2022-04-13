import React, { useContext } from 'react'
import FavouriteButton from './LikeButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RecipeContext } from '../contexts/RecipeContext';

function LikedRecipe({likedRecipe}) {

    console.log(likedRecipe);
    const {recipe} = likedRecipe;
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
      <img style={{width:'10%'}} src={recipe.image} alt={recipe.label} />
      <p>{recipe.label}</p>
      <DeleteIcon onClick={()=> handleLike(recipe)}/>
    </div>
    </>
  )
}

export default LikedRecipe