import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';


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

///////////////////////// APPBAR \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border:'2px solid #01937C',
    borderRadius: '50px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

  
  function SearchAppbar() {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
  
    const handleDrawer = () =>{
      setOpen(true)
    }

    const menuItems = [
      {
        text:'Home',
        icon : <HomeIcon/>,
        path:'/'
      },
      {
        text:'Recipes',
        icon: <LocalDiningIcon/>,
        path:'/search'
      }
    ]

    const navigate = useNavigate();
    const location = useLocation();
    
    return ( 
          <>
            <Toolbar 
                style={{display : 'flex', justifyContent :'space-between', alignItems:'center'}}>
                <Typography
                    variant="h6"
                    fontFamily="Poppins"
                    noWrap
                    component="div"
                    sx={{  display: { xs: 'none', sm: 'block' } }}
                >
                    Logo
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search something"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                </Search>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawer}
                    >
                    
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
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

export default SearchAppbar;