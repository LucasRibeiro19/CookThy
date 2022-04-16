import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from "../contexts/SearchContext";
import DrawerContext from '../contexts/DrawerContext';
import DrawerMenu from './DrawerMenu';
import { Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import logo from '../logo.png'

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
    const {handleInterTerm, handleTerm, term} = useContext(SearchContext);
    const {handleDrawer} = useContext(DrawerContext);

    const navigate = useNavigate();

    const pressEnter = (e) => {
      if(e.key === "Enter"){
          e.preventDefault();
          handleTerm();
          navigate('/search')
      }
  }


    return ( 
          <>
            <Toolbar 
                style={{display : 'flex', justifyContent :'space-between', alignItems:'center'}}>
                <Typography
                    variant="h2"
                    fontFamily="Poppins"
                    color='primary'
                    noWrap
                    component="div"
                    sx={{  display: { xs: 'none', sm: 'block', cursor:'pointer' } }}
                    onClick={()=> navigate('/')}
                >  
                <img src={logo} alt="Logo" width="50%"/>
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder={term == undefined ? "Search something" : term}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleInterTerm}
                            onKeyUp={pressEnter}
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
            <DrawerMenu/>
          </>
     );
}

export default SearchAppbar;