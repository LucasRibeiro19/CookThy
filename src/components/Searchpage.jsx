import '../searchpage.css';
import Recipes from "./Recipes";
import { useState } from "react";
// import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { SearchContext } from '../contexts/SearchContext';
import labels from '../labels.json';

function Searchpage( {term, recipes} ) {


    const { health, diet } = labels;

    const [healthFilter, SetHealthFilter]=useState('')
    const [dietFilter, SetDietFilter]=useState('')

    const {term} = useContext(SearchContext);
    
    useEffect(()=>{
        const getApi = async () => {
            await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=82995fc0&app_key=ee3fd4c5fe78ab26de55a1aaa3f0c94c`)
            .then(res=>setRecipes(res.data))
        }
        getApi();
    }, [term])
    
    console.log(recipes);

    
    return ( 
        <>
        <h1>{term}</h1>
        <Recipes recipes={recipes}></Recipes>
        </>
     );
}

export default Searchpage;