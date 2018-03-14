import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import './search.css'

const SearchBar = (props) => {

    const fetchSongs = (query, limit = 4) => {
        fetch(`https://itunes.apple.com/search?limit=${limit}&term=${encodeAPIURI(query)}`)
            .then(res => res.json())
            .then(
                (result) => {
                    props.getSongs(result.results);
                },
                (error) => {
                    console.log(error);
                    // TODO: catch errors and render;
                    return "sorry"
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
                debounceTimeout={1000}
                className="search__bar"
                onChange={handleChange}
                value={props.value}
            />
            <button
                type="submit"
                className="search__button"
            >search</button>
        </form>
    )
}

export default SearchBar;