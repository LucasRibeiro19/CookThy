import HomeButton from './HomeButton';
import HomeMain from './HomeMain';
import '../homepage.css';
import { Typography } from '@mui/material';




function Homepage() {
    return ( 
        <div className="mainHome">
            {/* <img src="" alt="" /> */}
            <Typography
                    variant="h2"
                    fontFamily="Poppins"
                    color='primary'
                    noWrap
                    component="div"
                    sx={{  display: { xs: 'none', sm: 'block', cursor:'pointer' } }}
                    
                >  
                Healthy Coooock
                </Typography>
            <HomeButton />
            {/* <Filters /> */}
        </div>
     );
}

export default Homepage;