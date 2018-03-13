import React, { Component } from 'react';

import Search from './comp/search/search';
import SongsList from './comp/songs_list/songs_list';

//TEMP
import iTunesAPIResponse from './itunes.json'

class App extends Component {
    
    state = {
        searchQuery: 'Paranoid',
        songsList: iTunesAPIResponse.results
    }

    handelSearch = (e) => {
        this.setState({searchQuery: e.target.value});
    }

    render() {
        console.log(this.state.songsList);
        return (
            <div>
                Hello~~!
                <br />
                <Search 
                    callback={this.handelSearch}
                    value={this.state.searchQuery} />
                <SongsList songsList={this.state.songsList} />
            </div>
        )
    }
}

export default App;