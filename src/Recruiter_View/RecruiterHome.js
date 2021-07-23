import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import JobsTemplate from './JobsTemplate';
import './RecruiterHome.css'

function RecruiterHome() {

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
        <div className="home">
            <h1>Job Postings by you...</h1>
            <div className="allposts">
                {jobs?.map(job => (<JobsTemplate
                title={job.data.Title}
                desc={job.data.Desc}
                salary={job.data.Salary}
                location={job.data.location}
                key = {job.id}
                id={job.id}
                />))}
                
                
            </div>
        </div>
    )
}

export default RecruiterHome
