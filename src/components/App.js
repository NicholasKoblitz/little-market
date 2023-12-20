import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
      
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
