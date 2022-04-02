import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {

        navigate(`/Search`)
    }

  return (
    <div style={{marginTop :'20px', display :'flex' , alignItems:'center', fontWeight:'bold'}}>
        <ArrowBackIcon
            onClick={handleBack}
        />
        <p style={{margin:'0'}} onClick={handleBack} >GO BACK</p>
    </div>
  )
}

export default BackButton