import React, { useState } from 'react';
import './RecruiterHeader.css';
import JobPost from './JobPost';
import { useHistory } from 'react-router-dom';

function RecruiterHeader() {
    const[show, setShow] = useState(false);
    const history = useHistory();

    const logout = () => {
        history.push('/')
    }
    return (
        <div className="header">
            <button onClick={logout}>Logout</button>
            <button onClick={() => setShow(!show)}>Post a Job</button>
            <JobPost close={() => setShow(false)} show={show} />
        </div>
    )
}

export default RecruiterHeader
