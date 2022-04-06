import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';

function FavouriteButton() {
  return (
    <>
        <FontAwesomeIcon icon={faHeartCirclePlus} size="2x" style={{color:'#01937C', cursor:'pointer'}} />
        <FontAwesomeIcon icon={faHeartCircleMinus} size="2x" style={{color:'#FFC074', cursor:'pointer'}} />
    </>
  )
}

export default FavouriteButton