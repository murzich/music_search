import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import './search.css'
import searchIcon from './search.svg'

const SearchBar = (props) => {

    const fetchSongs = (query, limit = 5, media = 'music') => {
        fetch(`https://itunes.apple.com/search?term=${encodeAPIURI(query)}&limit=${limit}&media=${media}`)
            .then(res => res.json())
            .then(
                (result) => {
                    props.getSongs(result.results);
                },
                (error) => {
                    console.log(error);
                    return "error"
                }
            );
    }

    const encodeAPIURI = (value) => {
        let uri = value.toLowerCase();
        return escape(uri).replace(/(%20)+/g, '+');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchSongs(props.value);
    }
    
    const handleChange = (e) => {
        props.callback(e);
        fetchSongs(e.target.value);
    }

    return (
        <form
            className="search"
            onSubmit={handleSubmit}
        >
            <DebounceInput
                minLength={2}
                debounceTimeout={300}
                className="search__bar"
                onChange={handleChange}
                value={props.value}
                placeholder="Search music..."
            />
            <button
                type="submit"
                className="search__button"
            >
                <img 
                    className="search__icon"
                    src={searchIcon}
                    alt="search" />
            </button>
        </form>
    )
}

export default SearchBar;