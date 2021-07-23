import React, { useState } from 'react';
import './ApplyModal.css'
import { db } from '../firebase';

function ApplyModal(props) {

    const[name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [degree, setDegree] = useState('')
    const [college, setCollege] = useState('')
    const [gpa, setgpa] = useState(0)
    const [company, setCompany] = useState('')
    const [post, setPost] = useState('')
    const [yoe, setyoe] = useState(0)
    const [salary, setsalary] = useState(0)

    const apply = () => {
        db.collection('job posts').doc(props.id).collection('candidates').add({
            'name': name,
            'email': email,
            'degree': degree,
            'college': college,
            'gpa': gpa,
            'company': company,
            'position': post,
            'yoe': yoe,
            'salary': salary
        })

        props.close();
    }

    if(!props.show){
        return null
    }

    return (
        <div onClick={props.close} className="apply">
            <div className="applyForm" onClick={e => e.stopPropagation()}>
                <h1>Application Form</h1>
                <div className="basicDetails">
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="Enter your Name" />
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your Email" />
                </div>
                <div className="educationDetails">
                    <h3>Enter recent Educational Details</h3>
                    <div className="first">
                        <input type="text" onChange={e => setDegree(e.target.value)} placeholder="Degree in..." />
                        <input type="text" onChange={e => setCollege(e.target.value)} name="" placeholder="University/College"/>
                        <input type="text" onChange={e => setgpa(e.target.value)} name="" placeholder="GPA" />
                    </div>
                </div>
                <div className="experienceDetails">
                    <h3>Enter Recent Experience</h3>
                    <div className="experience">
                        <input type="text" onChange={e => setCompany(e.target.value)} placeholder="Recent Organization"/>
                        <input type="text" onChange={e => setPost(e.target.value)} placeholder="Worked as.." />
                        <input type="text" onChange={e => setyoe(e.target.value)} placeholder="Years of experience" />
                        <input type="text" onChange={e => setsalary(e.target.value)} placeholder="Current CTC" />
                    </div>
                </div>
                <input type="file" name="" id="" placeholder="Upload Resume" />
                <button className="btn_sub" onClick={apply}>Submit</button>
            </div>
        </div>
    )
}

export default ApplyModal
