import {React, useEffect, useState} from "react";
import ProductCard from "./ProductCard";


const Hompage = () => {


    const [products, setProducts] = useState();

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('https://fakestoreapi.com/products');
    
            if(res.ok) {
                const data = await res.json();
                setProducts(data)
            }
            else {
                throw new Error(`Error: Status Code ${res.status}`);
            }
        };

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

export default Hompage;