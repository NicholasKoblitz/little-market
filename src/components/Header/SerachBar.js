import {React, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/SearchBar.css'

const SearchBar = () => {

    const INIT_VAL = {
        category: ""
    }

    const [searchData, setSearchData] = useState(INIT_VAL);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearchData(searchData => ({[name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/products/${searchData.category}`);
        setSearchData(INIT_VAL);

    }
    

    return (
        <div className="SearchBar">
            <form className="SearchBar-Form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    name="category"
                    value={searchData.category}
                    onChange={handleChange}
                />
                <button className="SearchBar-btn">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;