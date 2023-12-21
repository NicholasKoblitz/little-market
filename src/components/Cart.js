import {React, useState, useEffect} from "react";


const Cart = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        async function fetchCart() {
            const res = await fetch("https://fakestoreapi.com/carts");
    
            if(res.ok) {
                const data = await res.json()
    
                for(let i = 0; i < data.length; i++) {
                    if(data[i].userId === localStorage.getItem('id')) {
                        setProducts(data[i].products)
                    }
                }
            }
        }
        fetchCart()
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