import React from 'react';
import Header from './Header';
import Form from './Form';
import { Typography } from '@mui/material';


function ContactPage() {


  return (
    <div>
      <Header/>
      <Typography
        variant="h2"
        fontFamily="Poppins"
        color='#01937C'
        component="div"
        sx={{  display: {fontWeight:'bold'}, padding:"5%" }} 
      > Contact us
      </Typography>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <Form/>
      </div>
    </div>
  )
}

export default ContactPage