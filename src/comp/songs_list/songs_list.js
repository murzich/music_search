import React from 'react';
import SongsItem from '../songs_item/songs_item';
import './songs_list.css';

const SongsList = (props) => {

    const listItems = props.songsList.map((item) => {
        return (
            <SongsItem key={item.trackId} item={item} />
        )
    })

    const ListTitle = () => {
    return (
        <header className="list__header" >
            <div className="list__title">
                Artist
            </div>
            <div className="list__title">
                Track
            </div>
            <div className="list__title">
                Collection
            </div>
            <div className="list__title">
                Genre
            </div>
        </header>
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