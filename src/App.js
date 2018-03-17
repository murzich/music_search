import React, { Component } from 'react';

import Search from './comp/search/search';
import SongsList from './comp/songs_list/songs_list';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            songsList: [],
            error: null
        };
    }
    
    getSongsList = (songsArray) => {
        this.setState({ songsList: songsArray });
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value, error: null });
    }

    encodeAPIURI = (value) => {
        let uri = value.toLowerCase();
        return escape(uri).replace(/(%20)+/g, '+');
    }

    render() {
        const value = this.state.searchQuery;
        return (
            <div className="wrapper" >
                <header className="header" >
                    <Search
                        callback={this.handleSearch}
                        value={value} 
                        getSongs={this.getSongsList}
                    />
                </header>
                <SongsList songsList={this.state.songsList} />
            </div>
        )
    }
}

export default App;