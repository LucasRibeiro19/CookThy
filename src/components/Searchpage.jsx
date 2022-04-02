import '../searchpage.css';
import Recipes from "./Recipes";
import { useContext, useEffect } from "react";
import axios from 'axios';
// import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { SearchContext } from '../contexts/SearchContext';
import { RecipeContext } from '../contexts/RecipeContext';
import labels from '../labels.json';
import Filters from './Filters.jsx';


function Searchpage( ) {


    // const { health, diet } = labels;

    // const [healthFilter, SetHealthFilter]=useState('')
    // const [dietFilter, SetDietFilter]=useState('')

    const {term} = useContext(SearchContext);
    const {setRecipes, recipes} = useContext(RecipeContext);

    // console.log(recipes.hits.length);
    
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
    



    return ( 
        <>
        {/* <h1>{recipes.hits.length === 0 ? `No results for " ${term} "` : `${recipes.count} results for "${term}" :`}</h1> */}
        <h1>{term}</h1>
        <Filters />
        <Recipes/>
        </>
     );
}

export default Searchpage;