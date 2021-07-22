import React from 'react';
import JobsTemplate from './JobsTemplate';
import './RecruiterHome.css'

function RecruiterHome() {
    return (
        <div className="home">
            <h1>Job Postings by you...</h1>
            <div className="allposts">
                <JobsTemplate
                title="SDE1"
                desc="This is a test post"
                salary="1200000"
                location="NCR"
                />
                <JobsTemplate
                title="SDE1"
                desc="This is a test post"
                salary="1200000"
                location="NCR"
                />
                <JobsTemplate
                title="SDE1"
                desc="This is a test post"
                salary="1200000"
                location="NCR"
                />
                <JobsTemplate
                title="SDE1"
                desc="This is a test post"
                salary="1200000"
                location="NCR"
                />
                
            </div>
        </div>
    )
}

export default RecruiterHome
