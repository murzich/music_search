import React from 'react';
import SongsItem from '../songs_item/songs_item';

const SongsList = (props) => {

    const listItems = props.songsList.map((track) => {
        return (
            <li key={track.trackId} className="list__item" >
                <SongsItem track={track} />
            </li>
        )
    })

    return (
        <div>
            <div>
                Artist
            </div>
            <div>
                Track
            </div>
            <div>
                Collection
            </div>
            <div>
                Genre
            </div>
            <ul className="list" >
                {listItems}
            </ul>
        </div>
    )
}

export default SongsList;