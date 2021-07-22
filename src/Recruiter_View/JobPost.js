import React from 'react';
import './JobPost.css';

function JobPost(props) {

    if(!props.show){
        return null
    }

    return (
        <div onClick={props.close} className="postBackground">
            <div className="post" onClick={e => e.stopPropagation()}>
                <h3>Fill in the details below...</h3>
                <input type="text" placeholder="Job Title" />
                <textarea name="" id="" cols="30" rows="10">Job Description</textarea>
                <input type="text" placeholder="Compensation" />
                <input type="text" placeholder="location" />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default JobPost
