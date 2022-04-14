import HomeButton from './HomeButton';
import HomeMain from './HomeMain';
import '../homepage.css';
import { Typography } from '@mui/material';




function Homepage() {
    return ( 
        <div className="mainHome">
            {/* <img src="" alt="" /> */}
            <Typography
                    variant="h1"
                    fontFamily="Poppins"
                    color='#01937C'
                    noWrap
                    component="div"
                    sx={{  display: { xs: 'none', sm: 'block', fontWeight:'bold'} }}
                    
                >  
                Cook'Thy
                </Typography>
            <HomeButton />
            {/* <Filters /> */}
        </div>
     );
}

export default Homepage;