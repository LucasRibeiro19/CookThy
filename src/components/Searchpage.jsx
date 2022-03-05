import '../searchpage.css';
import Recipes from "./Recipes"

function Searchpage( {term, recipes} ) {


    console.log(recipes);

    return ( 
        <>
        <h1>{term}</h1>
        <Recipes recipes={recipes}></Recipes>*
        </>
     );
}

export default Searchpage;