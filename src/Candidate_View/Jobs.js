import React, { useState } from 'react';
import './Jobs.css';
import ApplyModal from './ApplyModal';

function Jobs(props) {

    const[show, setShow] = useState(false);

    return (
        <div className="jobSection">
        <div className="leftpanel"></div>
        <div className="jobs">
            <p>Job ID: {props.id}</p>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p>Compensation: {props.salary}          Location: {props.location}</p>
            <button onClick={() => setShow(!show)}>Apply</button>
            <ApplyModal id={props.id} close={() => setShow(false)} show={show} />
        </div>
        <div className="rightPanel"></div>
        </div>
    )
}

export default Jobs
