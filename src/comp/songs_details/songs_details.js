import React from 'react';

const SongsDetails = (props) => {

    const millisToMinutesAndSeconds = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
    console.log('props-details', props);

    return (
        <div>
            <h2>
                {props.track.artistName} - {props.track.trackName} &#x266b;
                </h2>
            <div>
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