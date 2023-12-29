import {React, useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import { getAllProduct } from "../api";
import '../styles/Homepage.css'


const Homepage = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const res = await getAllProduct();
            setProducts(res)
        }
        fetchProducts();
    }, [])

    

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