import HomeButton from './HomeButton';
import HomeMain from './HomeMain';
import HomeSearchbar from './HomeSearchbar';
import '../homepage.css';


function Homepage() {
    console.log(2)
    return ( 
        <div className="mainHome">
            {/* <img src="" alt="" /> */}
            <h1>Titre</h1>
            <HomeSearchbar />
            <HomeButton />
        </div>
     );
}

export default Homepage;