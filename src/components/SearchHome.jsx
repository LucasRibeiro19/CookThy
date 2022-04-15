import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from "../contexts/SearchContext";

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import logo from '../logo.png';
import './homeSearch.css'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    alignItems: 'center',
    border:'2px solid #01937C',
    borderRadius: '50px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    //marginLeft: 0,
    width: '30%',
    [theme.breakpoints.up('sm')]: {
      //marginLeft: theme.spacing(1),
      width: "50%",

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

  
  
  
  
  function SearchHome() {
    const {handleInterTerm, handleTerm} = useContext(SearchContext);
    const navigate = useNavigate();
    const pressEnter = (e) => {
      if(e.key === "Enter"){
          e.preventDefault();
          handleTerm();
          navigate('/search')
      }
  }

    return ( 
          <div style={{height:"50%"}}>
                <div className='homeSearch' >
                    <div className = 'logo'>
                        <img src={logo} alt="Logo" width="90%"/>
                    </div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search something to cook..."
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleInterTerm}
                            onKeyUp={pressEnter}
                            sx={{width: '100%'}}
                        />
                </Search>
                </div>
          </div>
     );
}

export default SearchHome;