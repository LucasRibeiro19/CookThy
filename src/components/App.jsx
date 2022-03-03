import '../App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import Searchpage from './Searchpage';
function App() {

  const [term, setTerm] = useState('');
  const [interTerm, setInterTerm] = useState('');

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
      let res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=82995fc0&app_key=ee3fd4c5fe78ab26de55a1aaa3f0c94c`)
      const { data } = res;
      return data;
    }

    const res = getApi();
    console.log(res)

  }, [term])



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage handleTerm={handleTerm} interTerm={interTerm} handleInterTerm={handleInterTerm}/>}></Route>
        <Route path="/Search" element={<Searchpage term={term}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
