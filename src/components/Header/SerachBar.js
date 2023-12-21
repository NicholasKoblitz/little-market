import {React, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const INIT_VAL = {
        category: ""
    }

    const [searchData, setSearchData] = useState(INIT_VAL);
    const navigate = useNavigate();

    /* 
    Move this function to the page that will display the items in the given category

    async function fetchCategory(category) {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        
        if(res.ok) {
            products = await res.json();
        }
        else {
            throw new Error(`Error: Status Code ${res.status}`);
        }
    }
    */


    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearchData(searchData => ({[name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchData)
        navigate(`/products/search/${searchData.category}`);

    }
    

    return (
        <div className="SerachBar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    name="category"
                    value={searchData.category}
                    onChange={handleChange}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;