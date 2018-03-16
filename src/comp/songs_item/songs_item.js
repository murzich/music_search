import React from 'react';
import SongsDetails from '../songs_details/songs_details';
import './songs_item.css';

 const SongsItem = (props) => {
    const track = props.item;

    const handleClick = () => {
        props.callback(props.id);
    }

    return (
        <li 
            className="song" 
            onClick={handleClick} 
        >
            <img 
                src={track.artworkUrl100} 
                alt={`album artwork ${track.artistName} - ${track.collectionName}`} 
                className="song__artwork" />
            <h3 className="song__artist">
                {track.artistName}
            </h3>
            <div className="song__track">
                {track.trackName}
            </div>
            <div className="song__collection">
                {track.collectionName}
            </div>
            <div className="song__genre">
                {track.primaryGenreName}
            </div>
            <div className="song__details">
            {/* Button and details; */}
                +
            </div>
            <SongsDetails track={track} expanded={props.expanded}/>
        </li>
    )
}

export default SongsItem;