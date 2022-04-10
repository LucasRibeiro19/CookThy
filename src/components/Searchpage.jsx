import '../searchpage.css';
import Recipes from "./Recipes";
import { useContext, useEffect } from "react";
import axios from 'axios';
// import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { SearchContext } from '../contexts/SearchContext';
import { RecipeContext } from '../contexts/RecipeContext';
import labels from '../labels.json';
import Filters from './Filters.jsx';
import { FilterContext } from '../contexts/FilterContext.jsx';


function Searchpage( ) {


    // const { health, diet } = labels;

    // const [healthFilter, SetHealthFilter]=useState('')
    // const [dietFilter, SetDietFilter]=useState('')

    const {term} = useContext(SearchContext);
    const {setRecipes, recipes} = useContext(RecipeContext);
    const {Diet} = useContext(FilterContext);

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



    useEffect(()=>{
        const getApiFilter = async (Diet) => {
            const app_id = "82995fc0";
            const app_key = "ee3fd4c5fe78ab26de55a1aaa3f0c94c";
            let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${term}`;
            if (Diet.length !== 0){
                console.log(Diet.length)
                url += `&diet=${Diet.join('&diet=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
            }
            else {
                url +=`&app_id=${app_id}&app_key=${app_key}`
            }
            console.log(url)
            await axios.get(url)
                .then(res=>setRecipes(res.data))
        }
        getApiFilter(Diet);
    }, [Diet])



















    //const [healthFilter, setHealthFilter]=useState([])
    //const [dietFilter, setDietFilter]=useState([])
    //const [recipesF, setRecipesF] = useState(recipes)
    //const [nextPageF, setNextPageF] = useState(nextPage)
    //const [display, setDisplay] = useState([recipesF])


    //useEffect(()=>{
    //    const getApiFilter = async (filterH, filterD) => {
    //        const app_id = "82995fc0";
    //        const app_key = "ee3fd4c5fe78ab26de55a1aaa3f0c94c";
    //        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${term}`
    //        if (filterH.length !== 0 & filterD.length !== 0){
    //            url += `&health=${filterH.join('&health=').toLowerCase()}`+`&diet=${filterD.join('&diet=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
    //        }
    //        else if (filterH.length === 0 & filterD.length !== 0){
    //            url += `&diet=${filterD.join('&diet=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
    //        }
    //        else if (filterH.length !== 0 & filterD.length === 0){
    //            url += `&health=${filterH.join('&health=').toLowerCase()}`+`&app_id=${app_id}&app_key=${app_key}`
    //        }
    //        else {
    //            url +=`&app_id=${app_id}&app_key=${app_key}`
    //        }
    //        console.log(url)
    //        await axios.get(url)
    //            .then(res=>setRecipesF(res.data))
    //    }
    //     getApiFilter(healthFilter, dietFilter);
    //  }, [healthFilter, dietFilter])


    //  const handleNextPage = (event) =>{
    //    console.log(recipesF.from)
    //    setRecipesF(nextPageF)
    //    setDisplay([...display, recipesF])
    //    console.log(recipesF)
    //  }

    //  useEffect(()=>{
    //    const getPageF = async ()=>{
    //        await axios.get(recipesF._links.next.href)
    //            .then (res=>setNextPageF(res.data))  
    //    }
    //    getPageF();

    //}, [recipesF])

    //useEffect(()=>{
    //    if (recipesF.from === 1){
    //        setDisplay([recipesF])
    //    }
    //}, [recipesF])
    



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