import '../App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import Searchpage from './Searchpage';
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';

function App() {

  const [term, setTerm] = useState('');
  const [interTerm, setInterTerm] = useState('');
  const [recipes, setRecipes] = useState({})
  const [nextPage, setNextPage] = useState({})

  const handleInterTerm = (event) => {
    console.log(event.target.value)
    setInterTerm(event.target.value)
  }

  const handleTerm = (event) => {
    console.log(event.target.value)
    setTerm(event.target.value)
  }

 useEffect(()=>{
    const getApi = async () => {
      await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=82995fc0&app_key=ee3fd4c5fe78ab26de55a1aaa3f0c94c`)
                  .then(res=>setRecipes(res.data))
    }
     getApi();
  }, [term])

  useEffect(()=>{
    const getNextPage = async()=>{
      await axios.get(recipes._links.next.href)
        .then(res=>setNextPage(res.data))
    }
    getNextPage();
  }, [recipes])

  



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage handleTerm={handleTerm} interTerm={interTerm} handleInterTerm={handleInterTerm}/>}></Route>
        <Route path="/Search" element={<Searchpage term={term} recipes={recipes} nextPage = {nextPage}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
