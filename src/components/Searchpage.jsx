import '../searchpage.css';
import Display from "./Display";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SearchContext } from '../contexts/SearchContext';
import { RecipeContext } from '../contexts/RecipeContext';
import Filters from './Filters.jsx';
import { FilterContext } from '../contexts/FilterContext.jsx';
import ButtonNext from './ButtonNext';
import { Typography } from '@mui/material';
import Header from './Header';
import CircularProgress from '@mui/material/CircularProgress';


function Searchpage( ) {

    const [loading, setLoading] = useState(false)
    const {term} = useContext(SearchContext);
    const {setRecipes, recipes, setNextPage, handleNextPage, setDisplay} = useContext(RecipeContext);
    const {
        filters, countFilters
    } = useContext(FilterContext);


    useEffect(()=>{
        const getNextPage = async (bool) => {
          bool &&  await axios.get(recipes._links.next.href) 
                .then(res=>setNextPage(res.data))
        }
        getNextPage(recipes && recipes.to !==0 && recipes.to < recipes.count);
    }, [recipes])


    useEffect(()=>{
        const getApiFilter = async (filters) => {
            const app_id = "b86bd0b8";
            const app_key = "45f330ead60f63216de55e4c2a767b4b";
            let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${term}`;
            if (filters.diet.length !==0){
                url += `&diet=${filters.diet.join('&diet=').toLowerCase()}`
            }
            if (filters.health.length !==0){
                url += `&health=${filters.health.join('&health=').toLowerCase()}`
            }
            if (filters.dishType.length !== 0){
                url += `&dishType=${filters.dishType.join('&dishType=').toLowerCase()}`
            }
            if (filters.cuisineType.length !== 0){
                url += `&cuisineType=${filters.cuisineType.join('&cuisineType=').toLowerCase()}`
            }
            if (filters.mealType.length !== 0){
                url += `&mealType=${filters.mealType.join('&mealType=').toLowerCase()}`
            }
            
            url +=`&app_id=${app_id}&app_key=${app_key}`
            await axios.get(url)
                .then(res=>{
                    setRecipes(res.data)
                    setDisplay([res.data])
                    setLoading(true)
                })
        }
        getApiFilter(filters);

    }, [filters, term])


    return ( 
        <div style={{padding: '0 1em 0 1em'}}>
            <Header/>
            <Typography
                    variant="h2"
                    fontFamily="Poppins"
                    color='#01937C'
                    component="div"
                    sx={{  display: {fontWeight:'bold'}, padding:"5%" }} 
                >{loading ? term.length === 0 ? "Search some recipes..." : recipes.count === 0 ? `No results for "${term}"` : `${recipes.count} results for "${term}" :` : <CircularProgress color="success" />}
            </Typography>
            {recipes.count === 0 ? null : <Filters />}
            <Display />
            {recipes.to < 20 ? null :<ButtonNext recipes={recipes} handleNextPage={handleNextPage}/>}
        </div>
     );
}

export default Searchpage;