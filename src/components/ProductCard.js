import React from "react";
import '../styles/ProductCard.css'


const ProductCard = ({key, title, price, category, description, image}) => {


    return (
        <div className="ProductCard" id={key}>
            <div className="ProductCard-Body">
                <div className="ProductCard-Image">
                    <img src={image} alt={title}/>
                </div>
                <div className="ProductCard-Info">
                    <div className="ProductCard-Title">
                        <h4>
                            {title}
                        </h4>
                    </div>
                    <div className="ProductCard-Price">
                        <span>
                            {`$${price}`}
                        </span>
                    </div>
                    {/* <div className="ProductCard-Category">
                        <span>
                            {category}
                        </span>
                    </div> */}
                    {/* <div className="ProductCard-Description">
                        <p>
                            {description}
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;