import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { auth } from '../firebase';

function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    const[show, setShow] = useState(false);

    const options = ['Select options','Recruiter','Jobseeker']
    const [ans, setAns] = useState(options[0])

    const selectHandler = (value) => {
        if(value.value === 'Recruiter')
            setAns('Recruiter')
        else if(value.value === 'Jobseeker')
            setAns('Jobseeker')

        return ans
    }

    const signup = () => {
        if(ans === 'Jobseeker'){
            auth.createUserWithEmailAndPassword(email, password).then(e => {
                history.push('/candidate/jobs')
            })
            .catch(err => console.log(err))
            
        }
        else if(ans === 'Recruiter'){
            auth.createUserWithEmailAndPassword(email, password).then(e => {
            history.push('/recruiter')
        }).catch(err => console.log(err))
        }
    }

    const login = () => {
        if(ans === 'Jobseeker'){
            auth.signInWithEmailAndPassword(email, password).then(e => {
                history.push('/candidate/jobs')
            })
            .catch(err => console.log(err))
            
        }
        else if(ans === 'Recruiter'){
            auth.signInWithEmailAndPassword(email, password).then(e => {
            history.push('/recruiter')
        }).catch(err => console.log(err))
        }
    }

    return (
        <div className="home">
            <div className="welcome">
                <h1>Welcome to our Portal.</h1>
                <h2>For jobseekers find your Dream Job here.</h2>
                <h2>For recruiters find the best of talent.</h2>
            </div>
            <div className="auth">
                <h1>Login/Signup</h1>
                {!show ? <div className="login" hidden={show}>
                    
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required={true}/>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder="Enter your password" required={true}/>
                        <p> Who are you: <Dropdown options={options} value={ans} onChange={selectHandler} placeholder="Select an option" />
                        </p>
                        <button type="submit" onClick={login}>Submit</button>
                </div> :
                <div className="login" hidden={!show}>
                
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" placeholder="Enter your name" required={true} />
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required={true}/>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder="Enter your password" required={true}/>
                        <p> Who are you: <Dropdown options={options} value={ans} onChange={e => setAns(e.value)} placeholder="Select an option" />
                        </p>
                        <button type="submit" onClick={signup}>Submit</button>
                </div>}
                {!show ? <h3>Don't have an account <button onClick={() => setShow(!show)}>click here</button></h3>
                :
                <button onClick={() => setShow(!show)}>Back to Login</button>
                }
            </div>
        </div>
    )
}

export default Home
