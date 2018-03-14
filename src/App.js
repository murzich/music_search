import React, { Component } from 'react';

import Search from './comp/search/search';
import SongsList from './comp/songs_list/songs_list';

//TEMP
// import iTunesAPIResponse from './itunes.json'

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            // isLoaded: true,
            songsList: [],
            error: null
        };
    }

    // fetchSongs = (query) => {
    //     fetch("https://itunes.apple.com/search?limit=10&term=" + this.encodeAPIURI(query))
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     // isLoaded: true,
    //                     songsList: result.results
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({
    //                     // isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }

    getSongsList = (songsArray) => {
        this.setState({ songsList: songsArray });
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value, error: null });
        // this.fetchSongs(e.target.value);
    }

    encodeAPIURI = (value) => {
        let uri = value.toLowerCase();
        return escape(uri).replace(/(%20)+/g, '+');
    }

    render() {
        return (
            <div>
                <header>
                    Hello~~!
                    <Search
                        callback={this.handleSearch}
                        value={this.state.searchQuery} 
                        getSongs={this.getSongsList}
                    />
                </header>
                <SongsList songsList={this.state.songsList} />
            </div>
        )
    }
}

export default App;