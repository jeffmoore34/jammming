import React, { useState, useCallback } from "react";
import "./App.css";

import Playlist from "./Playlist/Playlist";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults"
import Spotify from "./Spotify/spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
      // Remove from TrackList
      setSearchResults((prevResults) => 
        prevResults.filter((result) => result.id !== track.id)
      );
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    // Remove track from the playlist
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  
    // Add track back to search results only if it's not already there
    setSearchResults((prevResults) => {
      // Check if the track already exists in search results
      const trackExists = prevResults.some((result) => result.id === track.id);
      if (!trackExists) {
        return [...prevResults, track]; // Add the track back if it doesn't exist
      }
      return prevResults; // Return the results unchanged if the track already exists
    });
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;