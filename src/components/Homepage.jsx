import HomeButton from './HomeButton';
import HomeMain from './HomeMain';
import '../homepage.css';

function Homepage() {
    return ( 
        <div className="mainHome">
            {/* <img src="" alt="" /> */}
            <h1>Title</h1>
            <HomeMain/>
            <HomeButton/>
        </div>
     );
}

export default Homepage;