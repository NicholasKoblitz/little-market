import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import Hompage from './Homepage';
import Login from './Login';
import SearchProducts from './SearchedProducts';
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
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/products/:category' element={<SearchProducts/>}/>
            {/* 
            /sign-up -> Any new user will cause a 404 when trying to view their page. API constrant
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
