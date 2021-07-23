import React, { useState } from 'react';
import './JobPost.css';
import { db } from '../firebase';

function JobPost(props) {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [salary, setSalary] = useState('')
    const [location, setLocation] = useState('')

    const submit = () => {
        db.collection('job posts').add({
            'id': db.collection('job posts').onSnapshot().length + 1,
            'Title':title,
            'Desc': desc,
            'Salary': salary,
            'location': location,
        })
        props.close();
    }

    if(!props.show){
        return null
    }

    return (
        <div onClick={props.close} className="postBackground">
            <div className="post" onClick={e => e.stopPropagation()}>
                <h3>Fill in the details below...</h3>
                <input onChange={e => setTitle(e.target.value)} type="text" placeholder="Job Title" />
                <textarea onChange={e => setDesc(e.target.value)} name="" id="" cols="30" rows="10">Job Description</textarea>
                <input onChange={e => setSalary(e.target.value)} type="text" placeholder="Compensation" />
                <input onChange={e => setLocation(e.target.value)} type="text" placeholder="location" />
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default JobPost
