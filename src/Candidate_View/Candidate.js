import React, { useState, useEffect } from 'react';
import './Candidate.css';
import Jobs from './Jobs';
import { db } from '../firebase';

function Candidate(props) {

    const[jobs, setJobs] = useState([]);

    useEffect(() => {
        db.collection('job posts').onSnapshot(snapshot => {
            setJobs(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })
            ))
        })
    }, [jobs])

    return (
        <div className="candidate"> 
            <div className="details">
                <h2>Name: {props.name}</h2>
                <h2>Email: {props.email}</h2>
            </div>
            <div className="jobList">
                {jobs?.map(job => (<Jobs 
                title={job.data.Title}
                desc={job.data.Desc}
                salary={job.data.Salary}
                location={job.data.location}
                id={job.id}
                key={job.id}
                />))}
                
            </div>
        </div>
    )
}

export default Candidate
