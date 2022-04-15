import '../App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Footer from './Footer';
import Header from './Header';
import Searchpage from './Searchpage';
import RecipeDetails from './RecipeDetails';
import LikedRecipes from './LikedRecipes';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import { SearchContextProvider } from '../contexts/SearchContext';
import { RecipeContextProvider } from '../contexts/RecipeContext';
import { FilterContextProvider} from '../contexts/FilterContext';
import { DrawerContextProvider } from '../contexts/DrawerContext';


function App() {


  return (
    <div className="App" style={{ backgroundImage: "url(../public/background.jpg)", margin:"0"}}>
        <DrawerContextProvider>
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
        </DrawerContextProvider>
    </div>
  );
}

export default App;
