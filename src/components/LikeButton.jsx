import React from 'react'
import LikeContext from '../contexts/LikeContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';

function FavouriteButton({label}) {

  const {handleLike, isLiked} = useContext(LikeContext)

  return (
    <>

        {isLiked(label) ? 
          <FontAwesomeIcon onClick={()=> handleLike(label)} icon={faHeartCircleMinus} size="2x" style={{color:'#FFC074', cursor:'pointer'}} />
          : <FontAwesomeIcon onClick={()=> handleLike(label)} icon={faHeartCirclePlus} size="2x" style={{color:'#01937C', cursor:'pointer'}} />
        }
    </>
  )
}

export default FavouriteButton