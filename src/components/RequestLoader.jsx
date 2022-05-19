import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';


function RequestLoader() {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
        <Typography
            variant="h2"
            fontFamily="Poppins"
            color='#01937C'
            component="div"
            sx={{  display: {fontWeight:'bold', marginRight:'1em'}}} 
            >Loading...  
        </Typography>
        <CircularProgress color='success'/>
    </div>
  )
}

export default RequestLoader