import {Link} from 'react-router-dom';
import {useContext} from 'react'
import { SearchContext } from '../contexts/SearchContext';


function HomeButton() {

    const {term, handleTerm} = useContext(SearchContext);

    return ( 
        <>
        <Link to="/Search"><button value={term} onClick={handleTerm}>Search</button></Link>
        </>
     );
}

export default HomeButton;