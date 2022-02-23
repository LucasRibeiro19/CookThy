import '../App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {useEffet, useState} from 'react';
import Homepage from './Homepage';
import Footer from './Footer';
import Header from './Header';
import Searchpage from './Searchpage';
function App() {

  const [displayFilters, setDisplayFilters] = useState(false)

  const handleDispFilters = (e)=>{
    if (displayFilters === false) {
      setDisplayFilters(true)
    }else{
      setDisplayFilters(false)
    }
  }


  console.log(displayFilters);



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Search" element={<Searchpage handleDispFilters={handleDispFilters} isFiltersDisp={displayFilters}/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
