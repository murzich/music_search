import React from 'react';

 const SongsItem = (props) => {
    const item = props.track;
    return (
        <li className="songs">
            <img 
                src={item.artworkUrl60} 
                alt={`album artwork ${item.artistName} - ${item.collectionName}`} 
                className="songs__artwork" />
            <h3 className="songs__artist">
                {item.artistName}
            </h3>
            <div className="songs__track">
                {item.trackName}
            </div>
            <div className="songs__collection">
                {item.collectionName}
            </div>
            <div className="songs__genre">
                {item.primaryGenreName}
            </div>
            <div className="songs__details">
            {/* Button and details; */}
                +
            </div>
        </li>
    )
}

export default SongsItem;