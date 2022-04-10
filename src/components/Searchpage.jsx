import '../searchpage.css';
import Recipes from "./Recipes";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SearchContext } from '../contexts/SearchContext';
import { RecipeContext } from '../contexts/RecipeContext';
import labels from '../labels.json';
import Filters from './Filters.jsx';
import { FilterContext } from '../contexts/FilterContext.jsx';
import Button from '@mui/material/Button';
import { FilterNoneSharp } from '@mui/icons-material';


function Searchpage( ) {

    const {term} = useContext(SearchContext);
    const {setRecipes, recipes} = useContext(RecipeContext);
    const {
        Diet,
        Health,
        DishType,
        CuisineType,
        MealType
    } = useContext(FilterContext);

    const [filters, setFilters] = useState({
        diet : [],
        health : [],
        dishType : [],
        cuisineType : [],
        mealType : []
    })

    const handleFilters = (event) =>{
        setFilters({
            diet : Diet,
            health : Health,
            dishType : DishType,
            cuisineType : CuisineType,
            mealType : MealType
        })
    }
    
    useEffect(()=>{
        const getApi = async () => {
            try{
                await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=82995fc0&app_key=ee3fd4c5fe78ab26de55a1aaa3f0c94c`)
                .then(res=>setRecipes(res.data))
            } catch (err){
                console.log(err);
            }
        }
        getApi();
    }, [term])



    useEffect(()=>{
        const getApiFilter = async (filters) => {
            const app_id = "82995fc0";
            const app_key = "ee3fd4c5fe78ab26de55a1aaa3f0c94c";
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
            console.log(url)
            await axios.get(url)
                .then(res=>setRecipes(res.data))
        }
        getApiFilter(filters);
    }, [filters])





    return ( 
        <>
        {/* <h1>{recipes.hits.length === 0 ? `No results for " ${term} "` : `${recipes.count} results for "${term}" :`}</h1> */}
        <h1>{term}</h1>
        <Filters />
        <Button
                    sx={{width:'50%'}}
                    onClick={handleFilters}
                    variant='contained'
                    color='success'
                > Apply filters </Button>
        <Recipes/>
        </>
     );
}

export default Searchpage;