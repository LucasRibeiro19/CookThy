import '../searchpage.css';
import Recipes from "./Recipes";
import { useState, useEffect } from "react";
import axios from "axios"
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import Filters from './Filters';
import labels from '../labels.json';
import './filter.css'
import './recipes.css'
import ButtonNext from './ButtonNext'

function Searchpage( {term, recipes, nextPage} ) {

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
    const [recipesF, setRecipesF] = useState(recipes)
    const [nextPageF, setNextPageF] = useState(nextPage)
    const [display, setDisplay] = useState([recipesF])


    useEffect(()=>{
        const getApiFilter = async (filterH, filterD) => {
            const app_id = "82995fc0";
            const app_key = "ee3fd4c5fe78ab26de55a1aaa3f0c94c";
            let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${term}`
            if (filterH.length !== 0 & filterD.length !== 0){
                url += `&health=${filterH.join('&health=').toLowerCase()}`+`&diet=${filterD.join('&diet=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
            }
            else if (filterH.length === 0 & filterD.length !== 0){
                url += `&diet=${filterD.join('&diet=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
            }
            else if (filterH.length !== 0 & filterD.length === 0){
                url += `&health=${filterH.join('&health=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
            }
            else {
                url +=`&app_id=${app_id}&app_key=${app_key}`
            }
            console.log(url)
            await axios.get(url)
                .then(res=>setRecipesF(res.data))
        }
         getApiFilter(healthFilter, dietFilter);
      }, [healthFilter, dietFilter])


      const handleNextPage = (event) =>{
        console.log(recipesF.from)
        setRecipesF(nextPageF)
        setDisplay([...display, recipesF])
        console.log(recipesF)
      }

      useEffect(()=>{
        const getPageF = async ()=>{
            await axios.get(recipesF._links.next.href)
                .then (res=>setNextPageF(res.data))  
        }
        getPageF();

    }, [recipesF])

    useEffect(()=>{
        if (recipesF.from === 1){
            setDisplay([recipesF])
        }
    }, [recipesF])



    return ( 
        <>
        <div className='filter'>
            <Filters labels={health} handleFilter={handleFilterHealth}></Filters>
            <Filters labels={diet} handleFilter={handleFilterDiet}></Filters>
        </div>
        <div>
        <h1>{term}</h1>
        <div className='recipes'>
        <Recipes recipes={recipesF}></Recipes>
        </div>
        <ButtonNext recipes={nextPageF} handleNextPage={handleNextPage}></ButtonNext>
        </div>
        </>
     );
}

export default Searchpage;