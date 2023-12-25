import {React, useState, useEffect} from "react";
import ProductCard from "./ProductCard";


const Cart = () => {

    const [products, setProducts] = useState([]);


    // useEffect(() => {
    //     async function fetchCart() {

    //     }
        
    // }, [])

    return (
        <div className="Cart">
            <div>
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

export default Cart;