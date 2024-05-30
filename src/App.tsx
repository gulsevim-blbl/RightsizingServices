import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rightsizing from './Rightsizing'; 
import "./App.css"
function App() {
  return ( 
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rightsizing />} /> 
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
