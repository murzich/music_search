import React from 'react';
import SongsItem from '../songs_item/songs_item';

const SongsList = (props) => {

    const listItems = props.songsList.map((track) => {
        return (
            <SongsItem key={track.trackId} track={track} />
        )
    })

    const ListTitle = () => {
    return (
        <div className="list__title" >
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
        </div>
    )}

    return (
        <main className="list" >
            <ListTitle />
            <ul className="list__songs" >
                {listItems}
            </ul>
        </main>
    )
}

export default SongsList;