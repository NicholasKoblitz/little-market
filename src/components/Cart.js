import {React, useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import ProductCard from "./ProductCard";
import { getUserCart } from "../api";


const Cart = () => {

    const [products, setProducts] = useState([]);
    const userId = useParams();


    useEffect(() => {
        async function fetchCart(userId) {
            const res = await getUserCart(userId)
            setProducts(res);
        }
        fetchCart(userId)
    }, [])

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