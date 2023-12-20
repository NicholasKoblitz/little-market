import React from "react";
import { useState } from "react";


const SearchBar = () => {

    const INIT_VAL = {
        name: ""
    }

    const [searchData, setSearchData] = useState(INIT_VAL);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearchData(searchData => ({...searchData, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchData(INIT_VAL);

    }



    return (
        <div className="SerachBar">
            <input
                type="text"
                className="SearchBar-input"
                placeholder="Search"
                value={searchData.name}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar;