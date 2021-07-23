import React from 'react';
import './Template.css'

function Template(props) {
    return (
        <div className="template">
            <div className="personal">
                <h2>Personal Details</h2>
                <h3>Name: {props.name}</h3>
                <p>Email: {props.email}</p>
            </div>
            <div className="education">
                <h2>Educational Qualifications</h2>
                <h4>Degree in: {props.degree}</h4>
                <h4>College: {props.college}</h4>
                <p>GPA: {props.gpa}</p>
            </div>
            <div className="work">
                <h2>Experience</h2>
                <h3>Recent Position: {props.post}</h3>
                <h4>Recent Comapny: {props.company}</h4>
                <p>Years of Experience: {props.yoe}</p>
                <p>Salary: {props.salary}</p>
            </div>           
        </div>
    )
}

export default Template
