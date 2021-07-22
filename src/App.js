import React from 'react';
import './App.css';
import Home from './Home/Home';
import Candidate from './Candidate_View/Candidate';
import CandidateHeader from './Candidate_View/CandidateHeader';
import RecruiterHeader from './Recruiter_View/RecruiterHeader';
import RecruiterHome from './Recruiter_View/RecruiterHome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/candidate/jobs">
            <CandidateHeader />
            <Candidate name="Satyam" email="satyam@gmail.com"/>
          </Route>
          <Route path="/recruiter">
            <RecruiterHeader />
            <RecruiterHome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
