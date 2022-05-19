import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Footer from './Footer';
import Searchpage from './Searchpage';
import RecipeDetails from './RecipeDetails';
import LikedRecipes from './LikedRecipes';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import { SearchContextProvider } from '../contexts/SearchContext';
import { RecipeContextProvider } from '../contexts/RecipeContext';
import { FilterContextProvider} from '../contexts/FilterContext';
import { DrawerContextProvider } from '../contexts/DrawerContext';
import {LoadingContextProvider} from '../contexts/LoadingContext';
import '../App.css';


function App() {


  return (
    <div className="App" style={{ backgroundImage: "url(../public/background.jpg)", margin:"0"}}>
        <DrawerContextProvider>
          <LoadingContextProvider>
            <RecipeContextProvider>
              <SearchContextProvider>
                  <FilterContextProvider>
                      {/* <Header/> */}
                        <Routes>
                          <Route path="/" element={<Homepage />}></Route>
                          <Route path="/Search" element={<Searchpage />}></Route>
                          <Route path='/Recipe/:recipeID' element={<RecipeDetails/>}></Route>
                          <Route path='/liked-recipes' element={<LikedRecipes/>}></Route>
                          <Route path='/contact' element={<ContactPage/>}></Route>
                          <Route path='/about' element={<AboutPage/>}></Route>
                        </Routes>
                      <Footer/>
                  </FilterContextProvider>
              </SearchContextProvider>
            </RecipeContextProvider>
          </LoadingContextProvider>
        </DrawerContextProvider>
    </div>
  );
}

export default App;
