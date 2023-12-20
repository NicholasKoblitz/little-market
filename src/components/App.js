import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import ProductContext from './ProductContex';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContext.Provider value={{}}>
          <Header/>
          <Routes>
    
          </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
