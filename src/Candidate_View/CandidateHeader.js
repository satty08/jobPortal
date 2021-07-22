import React from 'react';
import './CandidateHeader.css';

function CandidateHeader() {
    return (
        <div className="header">
            <button>Jobs Applied</button>
            <button>Logout</button>
            <input type="text" placeholder="What do you wish to search for..."/>
            <button>Search</button>
        </div>
    )
}

export default CandidateHeader
