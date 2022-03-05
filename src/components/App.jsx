import '../App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useContext} from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import Searchpage from './Searchpage';
import { SearchContext, SearchContextProvider } from '../contexts/SearchContext';





function App() {

  const {term} = useContext(SearchContext);

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
        <SearchContextProvider>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Search" element={<Searchpage />}></Route>
        </SearchContextProvider>
      </Routes>
    </div>
  );
}

export default App;
