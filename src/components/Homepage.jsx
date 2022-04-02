import HomeButton from './HomeButton';
import HomeMain from './HomeMain';
import '../homepage.css'
import Filters from './Filters.jsx'




function Homepage() {
    console.log(2)
    return ( 
        <div className="mainHome">
            {/* <img src="" alt="" /> */}
            <h1>Titre</h1>
            <HomeButton />
            <Filters />
        </div>
     );
}

export default Homepage;