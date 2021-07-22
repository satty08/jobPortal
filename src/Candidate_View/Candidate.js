import React from 'react';
import './Candidate.css';
import Jobs from './Jobs';

function Candidate(props) {
    return (
        <div className="candidate"> 
            <div className="details">
                <h2>Name: {props.name}</h2>
                <h2>Email: {props.email}</h2>
            </div>
            <div className="jobList">
                <Jobs 
                title="SDE1"
                desc="This is a SDE Job"
                salary="2000000"
                location="Gurgaon"
                id='1'
                />
                <Jobs 
                title="SDE1"
                desc="This is a SDE Job"
                salary="2000000"
                location="Gurgaon"
                id='2'
                />
                <Jobs 
                title="SDE1"
                desc="This is a SDE Job"
                salary="2000000"
                location="Gurgaon"
                id="3"
                />
                <Jobs 
                title="SDE1"
                desc="This is a SDE Job"
                salary="2000000"
                location="Gurgaon"
                id="4"
                />
            </div>
        </div>
    )
}

export default Candidate
