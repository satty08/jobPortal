import React, { useState } from 'react';
import './JobsTemplate.css';
import CandidateList from './CandidateList';

function JobsTemplate(props) {

    const[show, setShow] = useState(false);

    return (
        <div className="jobsTemplate">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p><strong>Compensation: </strong>{props.salary}</p>
            <p><strong>Location: </strong>{props.location}</p>
            <p>View all candidates who have applied <button onClick={() => setShow(!show)} >View Here</button></p>
            <CandidateList id={props.id} close={() => setShow(false)} show={show} />
        </div>
    )
}

export default JobsTemplate
