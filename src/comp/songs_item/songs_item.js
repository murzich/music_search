import React from 'react';
import SongsDetails from '../songs_details/songs_details'

 const SongsItem = (props) => {
    const track = props.item;
    return (
        <li 
            className="songs" 
            onClick={e=>console.log(e.target)} 
        >
            <img 
                src={track.artworkUrl100} 
                alt={`album artwork ${track.artistName} - ${track.collectionName}`} 
                className="songs__artwork" />
            <h3 className="songs__artist">
                {track.artistName}
            </h3>
            <div className="songs__track">
                {track.trackName}
            </div>
            <div className="songs__collection">
                {track.collectionName}
            </div>
            <div className="songs__genre">
                {track.primaryGenreName}
            </div>
            <div className="songs__details">
            {/* Button and details; */}
                +
            </div>
            <SongsDetails track={track} />
        </li>
    )
}

export default SongsItem;