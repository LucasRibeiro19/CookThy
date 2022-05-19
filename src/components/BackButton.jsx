import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RecipeContext } from '../contexts/RecipeContext';


function BackButton({label, recipe}) {
  const {isLiked} = useContext(RecipeContext)
  
    const navigate = useNavigate();

    const handleBack = () => {
      if(isLiked(label,recipe)){
        navigate(`/liked-recipes`)
      }else{
        navigate(`/Search`)
      }
    }


  return (
    <div style={{marginTop :'20px', display :'flex' , alignItems:'center', fontWeight:'bold'}}>
        <ArrowBackIcon
            onClick={handleBack}
            style={{cursor:'pointer'}}
        />
        <p style={{margin:'0', cursor:'pointer'}} onClick={handleBack} >GO BACK</p>
    </div>
  )
}

export default BackButton