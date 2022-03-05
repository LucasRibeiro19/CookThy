import '../searchpage.css';
import {useContext} from 'react'
import { SearchContext } from '../contexts/SearchContext';



function Searchpage() {

const {term} = useContext(SearchContext)


    return ( 
        <>
        <h1>{term}</h1>
        </>
     );
}

export default Searchpage;