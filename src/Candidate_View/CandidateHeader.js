import React from 'react';
import { useHistory } from 'react-router-dom';
import './CandidateHeader.css';
import { auth } from '../firebase';

function CandidateHeader() {
    const history = useHistory()
    const logout = () => {
        auth.signOut().then(() => {
            history.push('/')
        })
    }

    return (
        <div className="header">
            <button>Jobs Applied</button>
            <button onClick={logout}>Logout</button>
            <input type="text" placeholder="What do you wish to search for..."/>
            <button>Search</button>
        </div>
    )
}

export default CandidateHeader
