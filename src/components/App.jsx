import '../App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Footer from './Footer';
import Header from './Header';
import Searchpage from './Searchpage';
import RecipeDetails from './RecipeDetails';
import { SearchContextProvider } from '../contexts/SearchContext';
import { RecipeContextProvider } from '../contexts/RecipeContext';
import {ModalContextProvider} from '../contexts/ModalContext';





function App() {



  return (
    <div className="App">
        <ModalContextProvider>
          <RecipeContextProvider>
            <SearchContextProvider>
                <Header/>
                  <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/Search" element={<Searchpage />}></Route>
                    <Route path='/Recipe/:recipeID' element={<RecipeDetails/>}></Route>
                  </Routes>
                <Footer/>
            </SearchContextProvider>
          </RecipeContextProvider>
        </ModalContextProvider>
    </div>
  );
}

export default App;
