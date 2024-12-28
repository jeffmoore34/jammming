import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleTermChange = useEffect((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useEffect(() => {
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