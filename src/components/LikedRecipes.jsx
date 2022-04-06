import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LikeContext from '../contexts/LikeContext';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function LikedRecipes() {
  
  const {like} = useContext(LikeContext);
  const navigate = useNavigate();

      const handleDetails = (label) => {
        console.log(label);
        navigate(`/Recipe/${label}`)
    }

    console.log(like);

  return (
    <div style={{padding:'0 24px 0 24px'}}>
      <h1>{like.length} recipes liked </h1>
      {like.map(label => 
        <>
        <h2>{label}</h2>
        <Button
        sx={{width:'50%'}}
        onClick={(label)=>handleDetails(label)}
        variant='contained'
        color='success'
        >
                      <Typography
                          variant='body2'
                          >
                          Show Details
                      </Typography>
                  </Button>
                  </>
    )}
    </div>
  )
}

export default LikedRecipes