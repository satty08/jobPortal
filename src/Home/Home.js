import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
    const history = useHistory();

    const[show, setShow] = useState(false);

    const login = () => {
        history.push('/candidate/jobs')
    }

    const signup = () => {
        history.push('/recruiter')
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
                        <input type="email" placeholder="Enter your Email"/>
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" placeholder="Enter your password"/>
                        <button type="submit" onClick={login}>Submit</button>
                </div> :
                <div className="login" hidden={!show}>
                
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" placeholder="Enter your name" />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter your Email"/>
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" placeholder="Enter your password"/>
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
