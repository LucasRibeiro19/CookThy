import HomeButton from './HomeButton';
import HomeSearchbar from './HomeSearchbar';
import '../homepage.css';

function Homepage( {handleInterTerm, handleTerm, interTerm} ) {
    return ( 
        <div className="mainHome">
            {/* <img src="" alt="" /> */}
            <h1>Titre</h1>
            <HomeSearchbar handleInterTerm={handleInterTerm}/>
            <HomeButton term={interTerm} handleTerm={handleTerm}/>
        </div>
     );
}

export default Homepage;