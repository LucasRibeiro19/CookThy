import SearchHome from './SearchHome';
import DrawerHome from './DrawerHome';
import { Typography } from '@mui/material';
import '../homepage.css';


function Homepage() {



    return ( 
        <div >
            <DrawerHome/>
            <div  style={{marginTop:"5%"}}>
            <Typography
                    variant="h2"
                    fontFamily="Poppins, cursive"
                    color='#01937C'
                    component="div"
                    sx={{  display: {sm: 'block' }, textAlign: 'center', fontWeight: 'bold'}}
                    
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