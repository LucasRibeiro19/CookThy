import '../App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Footer from './Footer';
import Header from './Header';
import Searchpage from './Searchpage';
import { SearchContextProvider } from '../contexts/SearchContext';
import { RecipeContextProvider } from '../contexts/RecipeContext';





function App() {



  return (
    <div className="App">
      <RecipeContextProvider>
        <SearchContextProvider>
            <Header/>
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/Search" element={<Searchpage />}></Route>
              </Routes>
            <Footer/>
        </SearchContextProvider>
      </RecipeContextProvider>
    </div>
  );
}

export default App;
