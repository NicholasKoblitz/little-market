import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import Hompage from './Homepage';
import Login from './Login';
import UserPage from './UserPage';
import Cart from './Cart';
import SearchProducts from './SearchedProducts';
import ProductPage from './ProductPage';
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
            <Route exact path='/users/:userId' element={<UserPage/>}/>
            <Route exact path='/users/:userId/cart' element={<Cart/>}/>
            <Route exact path='/products/:category' element={<SearchProducts/>}/>
            <Route exact path='/products/:productId' element={<ProductPage/>}/>
            {/* 
            /sign-up -> Any new user will cause a 404 when trying to view their page. API constrant
            */}
          </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
