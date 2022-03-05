import '../App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useContext} from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import Searchpage from './Searchpage';
import { SearchContextProvider } from '../contexts/SearchContext';
import { RecipeContextProvider } from '../contexts/RecipeContext';





function App() {





  
  return (
    <div className="App">
      <Routes>
        <RecipeContextProvider>
          <SearchContextProvider>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Search" element={<Searchpage />}></Route>
          </SearchContextProvider>
        </RecipeContextProvider>
      </Routes>
    </div>
  );
}

export default App;
