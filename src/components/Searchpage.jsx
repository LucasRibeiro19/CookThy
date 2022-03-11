import '../searchpage.css';
import Recipes from "./Recipes";
import { useState, useEffect } from "react";
import axios from "axios"
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import Filters from './Filters';
import labels from '../labels.json';
import './filter.css'

function Searchpage( {term, recipes} ) {

    const removeFilter = (labels, label) => {
        return labels.filter((elm) => elm !==label)
    }

    const handleFilterHealth = (event) => {
        if (!event.target.checked){
            setHealthFilter(removeFilter(healthFilter, event.target.name))
        }
        else {
            setHealthFilter([...healthFilter, event.target.name])
        }

        console.log(healthFilter)
        console.log(event.target.name)
    }

    const handleFilterDiet = (event) => {
        if (!event.target.checked){
            setDietFilter(removeFilter(dietFilter, event.target.name))
        }
        else {
            setDietFilter([...dietFilter, event.target.name])
        }

        console.log(dietFilter)
        console.log(event.target.name) 
    }

    const { health, diet } = labels;

    const [healthFilter, setHealthFilter]=useState([])
    const [dietFilter, setDietFilter]=useState([])
    const [recipesF, setRecipesF] = useState([])

    useEffect(()=>{
        const getApiFilter = async (filterH, filterD) => {
            const app_id = "82995fc0";
            const app_key = "ee3fd4c5fe78ab26de55a1aaa3f0c94c";
            let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${term}`
            console.log(filterH.length)
            //console.log(filterH !== [] & filterD !== [])
            if (filterH.length !== 0 & filterD.length !== 0){
                url += `&health=${filterH.join('&health=').toLowerCase()}`+`&diet=${filterD.join('&diet=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
            }
            else if (filterH.length === 0 & filterD.length !== 0){
                url += `&diet=${filterD.join('&diet=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
            }
            else if (filterH.length !== 0 & filterD.length === 0){
                url += `&health=${filterH.join('&health=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
            }
            //let url = filterH.concat()`https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=82995fc0&app_key=ee3fd4c5fe78ab26de55a1aaa3f0c94c`
            else {
                url +=`&app_id=${app_id}&app_key=${app_key}`
            }
            console.log(url)
            //console.log(filterD)
            await axios.get(url)
                .then(res=>setRecipesF(res.data))
        }
         getApiFilter(healthFilter, dietFilter);
      }, [healthFilter, dietFilter])

      const selectRecipes = recipesF.length === 0 ? recipes : recipesF

    return ( 
        <>
        <div className='filter'>
            <Filters labels={health} handleFilter={handleFilterHealth}></Filters>
            <Filters labels={diet} handleFilter={handleFilterDiet}></Filters>
        </div>
        <div>
        <h1>{term}</h1>
        <Recipes recipes={selectRecipes}></Recipes>
        </div>
        </>
     );
}

export default Searchpage;