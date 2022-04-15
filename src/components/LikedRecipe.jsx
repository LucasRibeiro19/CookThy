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
      justifyContent: "space-between",
      alignItems : "center",
      padding: '1em',
      // border: '1px solid #2E7D32',
      borderRadius: '4px',
      backgroundColor : "white",
      margin: '25px',
      width: "70%",
      flexWrap:"wrap",
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
      
    };

  return (
    <>
    <div style={{display: "flex", justifyContent:"center"}}>
    <div style={style}>
      <img style={{width:"10%"}} src={recipeLike.image} alt={recipeLike.label} />
      <p style={{fontWeight: "medium"}}>{recipeLike.label}</p>
      <div style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
      <Button
          sx={{width:"90%", height:'50%', marginRight:"1em"}}
          onClick={handleDetails}
          variant='contained'
          color='success'
        >Show Details
      </Button>
      <DeleteIcon onClick={()=> handleLike(recipeLike.label, recipeLike)}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default LikedRecipe