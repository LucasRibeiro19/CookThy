import React from 'react';
import Header from './Header';
import "../about.css";
import { Typography } from '@mui/material';

function AboutPage() {
  return (
    <div>
      <Header/>
      <Typography
        variant="h2"
        fontFamily="Poppins"
        color='#01937C'
        component="div"
        sx={{  display: {fontWeight:'bold'}, padding:"5%" }} 
      > About us
      </Typography>
      <div className="container">
      <p>
      Our consumption habits have become a personal choice such as responsible over years. Agriculture has significant impact on the environment
      and we have to change our eating habits consequently. Moreover, a healthy diet ensures well-being and prosperity.</p><br />
      <p>
      We made Cook'Thy in order to provide you quickly original recipes corresponding to your ethical criteria and gastronomy tastes. 
      </p><br />
      <p>
      Realised by 
      </p>
      <p>
      Claire Roman<br />
      Lucas Ribeiro<br />
      Nicolas Journet<br />
      </p>
      <p>
      Sources :
      </p>
      <p>
      Pictos : <br /> 
      www.flaticon.com <br /> www.pexels.com <br /> <br />
      API : www.edamam.com <br />
      </p>
      </div>
    </div>
  )
}

export default AboutPage