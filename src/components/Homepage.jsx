import '../homepage.css';
import { Typography } from '@mui/material';
import SearchHome from './SearchHome';





function Homepage() {



    return ( 
        <div >
            <div  style={{marginTop:"5%"}}>
            <Typography
                    variant="h1"
                    fontFamily="Poppins, cursive"
                    color='#01937C'
                    component="div"
                    sx={{  display: { xs: 'none', sm: 'block' }, textAlign: 'center', fontWeight: 'bold'}}
                    
                >  
                Cook'Thy
            </Typography>
            </div>
               <div>
                <SearchHome/>
               </div>
        </div>
     );
}

export default Homepage;