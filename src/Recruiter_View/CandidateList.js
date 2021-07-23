import React, { useState } from 'react';
import './CandidateList.css';
import { db } from '../firebase';
import Template from './Template';

function CandidateList(props) {

    const [clist, setclist] = useState([]);

    db.collection('job posts').doc(props.id).collection('candidates').onSnapshot(snapshot => (
        setclist(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    ))

    if(!props.show){
        return null
    }

    return (
        <div onClick={props.close} className="outer">
            <div className="inner" onClick={(e) => e.stopPropagation()}>
                {clist?.map(ele => (<Template
                name={ele.data.name}
                id={ele.id}
                email={ele.data.email}
                degree={ele.data.degree}
                college={ele.data.college}
                gpa={ele.data.gpa}
                post={ele.data.position}
                company={ele.data.company}
                salary={ele.data.salary}
                yoe={ele.data.yoe}
                 />))}
            </div>
            
        </div>
    )
}

export default CandidateList
