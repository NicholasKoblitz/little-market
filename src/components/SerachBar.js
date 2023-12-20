import {React, useState, useContext} from "react";
import ProductContext from "./ProductContex";

const SearchBar = () => {

    const INIT_VAL = {
        name: ""
    }

    const [searchData, setSearchData] = useState(INIT_VAL);
    const products = useContext(ProductContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearchData(searchData => ({...searchData, [name]: value}));
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearchData(INIT_VAL);

    // }
    async function fetchCategory(category) {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        
        if(res.ok) {
            products = await res.json();
        }
        else {
            throw new Error(`Error: Status Code ${res.status}`);
        }
    }
    



    return (
        <div className="SerachBar">
            {/* 
            Add a form componenet
            Add a Material UI Autocomplete component
            Add a button component
            */}
        </div>
    )
}

export default SearchBar;