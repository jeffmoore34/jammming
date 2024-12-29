import React, { useCallback } from 'react';

import TrackList from '../TrackList/TrackList';

const Playlist = (props) => {
    const handleNameChange = useCallback(
    (event) => {props.onNameChange(event.target.value);
    },
    [props.onNameChange]
    );

    return (
        <div>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
        </div>
    )
};