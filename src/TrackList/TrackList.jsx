import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
    return (
        <div>
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemoval}
                    />
                );
            })}
        </div>
    );
};

export default TrackList;