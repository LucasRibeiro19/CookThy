import React from 'react';
import Header from './Header';
import { Typography } from '@mui/material';

function ContactPage() {


  return (
    <div>
      <Header/>
      <div style={{margin:'1em'}}>
        <Typography
          variant="h2"
          fontFamily="Poppins"
          color='#01937C'
          fontWeight='bold'
        >
          Contact us !
        </Typography>
      </div>
    </div>
  )
}

export default ContactPage