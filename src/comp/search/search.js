import React from 'react';
import './search.css'

const SearchBar = (props) => {
    return (
        <input 
            className="searchbar" 
            onChange={props.callback} 
            value={props.value} />
    )
}

export default SearchBar;