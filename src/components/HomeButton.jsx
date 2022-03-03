import {Link} from 'react-router-dom';
function HomeButton( {handleTerm, term} ) {
    return ( 
        <>
        <Link to="/Search"><button value={term} onClick={handleTerm}>Search</button></Link>
        </>
     );
}

export default HomeButton;