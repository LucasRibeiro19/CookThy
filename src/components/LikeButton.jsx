import React from 'react'
import { useContext } from 'react';
import {RecipeContext} from '../contexts/RecipeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';

function FavouriteButton({label, recipe}) {

  const {handleLike, isLiked} = useContext(RecipeContext)

  return (
    <>

        {isLiked(label, recipe) ? 
          <FontAwesomeIcon onClick={()=> handleLike(label, recipe)} icon={faHeartCircleMinus} size="2x" style={{color:'#FFC074', cursor:'pointer'}} />
          : <FontAwesomeIcon onClick={()=> handleLike(label, recipe)} icon={faHeartCirclePlus} size="2x" style={{color:'#01937C', cursor:'pointer'}} />
        }
    </>
  )
}

export default FavouriteButton