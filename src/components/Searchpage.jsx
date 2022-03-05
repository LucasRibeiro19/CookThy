import '../searchpage.css';
import Recipes from "./Recipes";
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
// import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { SearchContext } from '../contexts/SearchContext';
import { RecipeContext } from '../contexts/RecipeContext';
import labels from '../labels.json';

function Searchpage( ) {


    const { health, diet } = labels;

    // const [healthFilter, SetHealthFilter]=useState('')
    // const [dietFilter, SetDietFilter]=useState('')

    const {term} = useContext(SearchContext);
    const {setRecipes} = useContext(RecipeContext);
    
    useEffect(()=>{
        const getApi = async () => {
            await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=82995fc0&app_key=ee3fd4c5fe78ab26de55a1aaa3f0c94c`)
            .then(res=>setRecipes(res.data))
        }
        getApi();
    }, [term])
    



    return ( 
        <>
        <h1>{term}</h1>
        <Recipes/>
        </>
     );
}

export default Searchpage;