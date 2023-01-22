import React from 'react';
import './App.css';
import Home from './Home';
import Score from './Score';
import Explore from './Explore';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/score" element={<Score/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
