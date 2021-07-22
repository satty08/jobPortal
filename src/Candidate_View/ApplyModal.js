import React from 'react';
import './ApplyModal.css'

function ApplyModal(props) {

    if(!props.show){
        return null
    }

    return (
        <div onClick={props.close} className="apply">
            <div className="applyForm" onClick={e => e.stopPropagation()}>
                <h1>Application Form</h1>
                <div className="basicDetails">
                    <input type="text" placeholder="Enter your Name" />
                    <input type="email" placeholder="Enter your Email" />
                </div>
                <div className="educationDetails">
                    <h3>Enter recent Educational Details</h3>
                    <div className="first">
                        <input type="text" placeholder="Degree in..." />
                        <input type="text" name="" id="" placeholder="University/College"/>
                        <input type="text" name="" id="" placeholder="GPA" />
                    </div>
                </div>
                <div className="experienceDetails">
                    <h3>Enter Recent Experience</h3>
                    <div className="experience">
                        <input type="text" placeholder="Recent Organization"/>
                        <input type="text" placeholder="Worked as.." />
                        <input type="text" placeholder="Years of experience" />
                        <input type="text" placeholder="Current CTC" />
                    </div>
                </div>
                <input type="file" name="" id="" placeholder="Upload Resume" />
                <button className="btn_sub">Submit</button>
            </div>
        </div>
    )
}

export default ApplyModal
