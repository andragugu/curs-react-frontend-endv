import React from 'react'
import './searchBar.css';

const SearchBarCompoent = ({placeholder, handleChange}) => {
    return (
        <div className="search">
            <input type="search" placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default SearchBarCompoent;
