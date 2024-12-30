import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} onadd={props.onAdd} />
        </div>
    );
};

export default SearchResults;