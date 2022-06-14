import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DrawerContext from '../contexts/DrawerContext';
import {RecipeContext} from '../contexts/RecipeContext';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import { makeStyles } from '@mui/styles';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';


const drawerWidth = 200;

const useStyles = makeStyles({
  drawer:{
    width: drawerWidth
  },
  drawerPaper:{
    width: drawerWidth
  },
  active:{
    backgroundColor:'#F4F4F4'
  }
})

function DrawerMenu() {
  
  const classes = useStyles();
  
  const {open, setOpen} = useContext(DrawerContext);

  const {like} = useContext(RecipeContext)

    const menuItems = [
      {
        text:'Home',
        icon : <HomeIcon/>,
        path:'/CookThy'
      },
      {
        text:'Recipes',
        icon: <LocalDiningIcon/>,
        path:'/search'
      },
      {
        text:'Liked Recipes',
        icon: <Badge badgeContent={like.length} color="success"><FavoriteIcon/></Badge>,
        path:'/liked-recipes'
      },
      {
        text:'Contact',
        icon: <ContactPageIcon/>,
        path:'/contact'
      },
      {
        text:'About',
        icon: <InfoIcon/>,
        path:'/about'
      }
    ]

    const navigate = useNavigate();
    const location = useLocation();

    return ( 
        <>
            <Drawer 
              className={classes.drawer}
              classes={{paper : classes.drawerPaper}}
              anchor='right'
              open={open}
              onClose={()=> setOpen(false)}
              
              >
                <List>
                  {menuItems.map(item => (
                            <ListItem 
                              // button
                              sx={{cursor: 'pointer'}}
                              key={item.text} 
                              onClick={() => navigate(item.path)} 
                              className={location.pathname === item.path ? classes.active : null}
                            >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
                          </ListItem>
                  ))}
                </List>
            </Drawer>
        </>
     );
}

export default DrawerMenu;