import React, { useState, useCallback } from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  // Handle save button click
  const handleSave = async () => {
    setIsLoading(true); // Start loading
    await props.onSave(); // Wait for the save to complete
    setIsLoading(false); // End loading
  };

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />

      {/* Conditionally render loading screen or save button */}
      {isLoading ? (
        <div className="loading-screen">
          <p>Saving to Spotify...</p>
          <div className="spinner"></div> {/* You can replace this with a spinner component */}
        </div>
      ) : (
        <button className="Playlist-save" onClick={handleSave}>
          SAVE TO SPOTIFY
        </button>
      )}
    </div>
  );
};

export default Playlist;