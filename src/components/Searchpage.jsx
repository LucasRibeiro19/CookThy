import '../searchpage.css';
import Recipes from "./Recipes";
import { useState } from "react";
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import labels from '../labels.json';

function Searchpage( {term, recipes} ) {

    const { health, diet } = labels;

    const [healthFilter, SetHealthFilter]=useState('')
    const [dietFilter, SetDietFilter]=useState('')

    console.log(recipes);

    return ( 
        <>
        <h1>{term}</h1>
        <Recipes recipes={recipes}></Recipes>
        </>
     );
}

export default Searchpage;