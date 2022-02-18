import '../App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {useEffet, useState} from 'react';
import Homepage from './Homepage';
import Searchpage from './Searchpage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Search" element={<Searchpage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
