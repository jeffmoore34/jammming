import React, { useState, useCallback } from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div>
            <input placeholder="Enter a Song Title" onChange={handleTermChange} />
            <button>
                Search
            </button>
        </div>
    );
};