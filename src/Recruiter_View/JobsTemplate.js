import React from 'react';
import './JobsTemplate.css'

function JobsTemplate(props) {
    return (
        <div className="jobsTemplate">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p><strong>Compensation: </strong>{props.salary}</p>
            <p><strong>Location: </strong>{props.location}</p>
            <p>View all candidates who have applied <button>View Here</button></p>
        </div>
    )
}

export default JobsTemplate
