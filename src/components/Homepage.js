import {React, useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import axios from "axios";


const Homepage = () => {


    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     async function fetchProducts() {

    //     fetchProducts();
    // }, [])

    

    return (
        <div className="Homepage">
            <div className="Homepage-products-div">
            {products.map(product => 
                <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                />
            )}
            </div>
        </div>
    )
}

export default Homepage;