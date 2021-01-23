import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.png';


class DashboardProf extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class = "main" className="DashboardPage">
                <div className="sidenav">
                    <img src={logo} alt="Logo" className ="logo" />
                    <h2>John Doe</h2>
                    <a href="#dashboard">Dashboard</a>
                    <a href="#class1">CS 1101 - A</a>
                    <a href="#class2">CS 1101 - B</a>
                    <a href="#class3">CS 1102 - A</a>
                    <a className="addClass">+</a>
                </div>
                <div class = "dashboard - ID">
                    <p className="profID">ID: 1234567890</p>
                </div>
                <div class = "dashboard - Log out">
                    <Button variant="" type="submit" className="logOutBtn">
                        LOG OUT
                    </Button>
                </div>
                
                    <Button variant="" type="submit" className="classBtn">
                        I am a Student
                    </Button>
            </div>
        );
    }
}

export default DashboardProf;