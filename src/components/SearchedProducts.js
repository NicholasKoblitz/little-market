import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "../api";


const SearchProducts = () => {


    const [products, setProducts] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        async function fetchCategory(category) {
            const res = await getProductsByCategory(category)
            setProducts(res)
            console.log(products)
        }

        fetchCategory(category);
    }, [])

    return (
        <div className="SearchedProducts">
            <div className="SearchedProducts-products-div">
                
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

export default SearchProducts;