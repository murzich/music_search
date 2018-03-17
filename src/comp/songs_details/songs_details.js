import React from 'react';
import './songs_details.css';

const SongsDetails = (props) => {

    const millisToMinutesAndSeconds = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return !props.expanded ? (
        ""
        ) : (
            <div className="details" >
                <h2 className="details__title" >
                    {props.track.artistName} - {props.track.trackName}
                    <span className="details__icon" > &#x266b;</span>
                </h2>
                <div className="details__info">
                    <div>
                        <span className="details__description" >Collection: </span>
                        {props.track.collectionName}
                    </div>
                    <div>
                        <span className="details__description" >Track duration: </span>
                        {millisToMinutesAndSeconds(props.track.trackTimeMillis)} min
                </div>
                    <div>
                        <span className="details__description" >Track count: </span>
                        {props.track.trackCount}
                    </div>
                    <div>
                        <span className="details__description" >Track price: </span>
                        {props.track.trackPrice} USD
                </div>
                    <div>
                        <span className="details__description" >Price: </span>
                        {props.track.collectionPrice} USD
                </div>
                </div>
            </div>
        )
}

export default SongsDetails;