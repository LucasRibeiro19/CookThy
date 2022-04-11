import '../searchpage.css';
import Display from "./Display";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SearchContext } from '../contexts/SearchContext';
import { RecipeContext } from '../contexts/RecipeContext';
import Filters from './Filters.jsx';
import { FilterContext } from '../contexts/FilterContext.jsx';
import Button from '@mui/material/Button';
import ButtonNext from './ButtonNext';


function Searchpage( ) {

    const {term} = useContext(SearchContext);
    const {setRecipes, recipes, setNextPage, handleNextPage, setDisplay} = useContext(RecipeContext);
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
                .then(res=>{
                    setRecipes(res.data)
                    setDisplay([res.data])
                })
            } catch (err){
                console.log(err);
            }
        }
        getApi();   
 
    }, [term])

    useEffect(()=>{
        const getNextPage = async (bool) => {
          bool &&  await axios.get(recipes._links.next.href) 
                .then(res=>setNextPage(res.data))
        }
        getNextPage(recipes && recipes.to !==0 && recipes.to < recipes.count);
    }, [recipes])


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
            await axios.get(url)
                .then(res=>{
                    setRecipes(res.data)
                    setDisplay([res.data])}
                    )
            // console.log(url)
        }
        getApiFilter(filters);

    }, [filters])

    // console.log(recipes.to !== 0 && recipes.from <= recipes.count)

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
        <Display />
        <ButtonNext recipes={recipes} handleNextPage={handleNextPage}/>
        </>
     );
}

export default Searchpage;