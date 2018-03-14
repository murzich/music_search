import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import './search.css'

const SearchBar = (props) => {
    return (
        <form 
            className="search"
            onSubmit={e=>{e.preventDefault()} }
        >
            <DebounceInput
                minLength={2}
                debounceTimeout={300}
                className="search__bar"
                onChange={props.callback}
            />
            <button 
                type="submit" 
                className="search__button" 
            >search</button>
        </form>
    )
}

export default SearchBar;