import {useEffect, useState, React} from "react";
import useParams from 'react-router-dom';

const ProductPage = () => {


    const {productId} = useParams();
    const [product, setProduct] = useState()

    useEffect(() => {
        async function fetchProduct(productId) {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

            if(res.ok) {
                const data = await res.json();
                setProduct(data)
            }
            else {
                throw new Error(`Error: Status Code ${res.status}`)
            }
        }
        fetchProduct(productId)
    }, [])

    return (
        <div className="ProductPage">
            <div className="ProductPage-Body">
                <div className="ProductPage-Image">
                    <img href={product.image} alt={product.title}/>
                </div>
                <div className="ProductPage-Info">
                    <div className="ProductPage-Title">
                        <h4>
                            {product.title}
                        </h4>
                    </div>
                    <div className="ProductPage-Price">
                        <span>
                            {product.price}
                        </span>
                    </div>
                    <div className="ProductPage-Category">
                        <span>
                            {product.category}
                        </span>
                    </div>
                    <div className="ProductPage-Description">
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductPage;