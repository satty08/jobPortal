import React, { useState } from 'react';
import './RecruiterHeader.css';
import JobPost from './JobPost';

function RecruiterHeader() {
    const[show, setShow] = useState(false);
    return (
        <div className="header">
            <button>Logout</button>
            <button onClick={() => setShow(!show)}>Post a Job</button>
            <JobPost close={() => setShow(false)} show={show} />
        </div>
    )
}

export default RecruiterHeader
