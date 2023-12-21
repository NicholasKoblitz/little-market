import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import Hompage from './Homepage';
import ProductContext from './ProductContex';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContext.Provider value={{}}>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Hompage/>} />
            {/* 
            /login
            /sign-up -> Any new user will cause a 404 when trying to view their page. API constrant
            /products/:category
            /products/:productId
            /users/:userId
            /users/:userId/cart
            */}
          </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
