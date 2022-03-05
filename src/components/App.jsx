import '../App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useContext} from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import Searchpage from './Searchpage';
<<<<<<< HEAD
import { SearchContext, SearchContextProvider } from '../contexts/SearchContext';



=======
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import labels from '../labels.json';



function App() {


  const { health, diet } = labels;
  console.log(health)
  console.log(diet)

  const [term, setTerm] = useState('');
  const [interTerm, setInterTerm] = useState('');
  const [recipes, setRecipes] = useState({})
  const [healthFilter, SetHealthFilter]=useState('')
  const [dietFilter, SetDietFilter]=useState('')
>>>>>>> claire


function App() {

  const {term} = useContext(SearchContext);

 useEffect(()=>{
    const getApi = async () => {
      await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=82995fc0&app_key=ee3fd4c5fe78ab26de55a1aaa3f0c94c`)
                  .then(res=>setRecipes(res.data))
    }
     getApi();
  }, [term])



  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <SearchContextProvider>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Search" element={<Searchpage />}></Route>
        </SearchContextProvider>
=======
        <Route path="/" element={<Homepage handleTerm={handleTerm} interTerm={interTerm} handleInterTerm={handleInterTerm}/>}></Route>
        <Route path="/Search" element={<Searchpage term={term} recipes={recipes}/>}></Route>
>>>>>>> claire
      </Routes>
    </div>
  );
}

export default App;
