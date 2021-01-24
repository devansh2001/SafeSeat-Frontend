import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.png';
import { browserHistory } from 'react-router';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class = "main" className="mainPage">
                <Button variant="" type="submit" className="signInBtn">
                    SIGN IN
                </Button>
                <img src={logo} alt="Logo" className ="logoImage" />
                <p className="ourMission">It’s time to go back safely to our campus and be able 
                    to comfortably attend in person lectures. <br></br>We can 
                    return to normalcy during a pandemic.
                </p>
                <Button onClick={() => browserHistory.push('/login')} variant="" type="submit" className="button">
                    I am a Student
                </Button>
                <Button onClick={() => browserHistory.push('/sign-up')} variant="" type="submit" className="button">
                    I am a Professor
                </Button>
            </div>
        );
    }
}

export default Main;