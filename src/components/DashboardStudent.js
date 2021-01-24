import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.png';


class DashboardStudent extends Component {
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
                <div>
                    <Button variant="" type="submit" className="logOutBtn">
                        LOG OUT
                    </Button>
                </div>
                <div className = "dashboard">
                    <h2>Hello John Doe,</h2>
                    <h5>Below are the classes you are signed up to</h5>
                    <div href="#class1">
                        <h5>CS 1101<br></br> SECTION A</h5>
                        <p>10:00 am - 10:45 am <br></br> 67% Full</p>
                    </div>
                    <div href="#class2">
                        <h5>CS 1101<br></br> SECTION B</h5>
                        <p>09:00 am - 09:45 am <br></br> 100% Full</p>
                    </div>
                    <div href="#class3">
                        <h5>CS 1102<br></br> SECTION A</h5>
                        <p>12:00 am - 12:45 am <br></br> 73% Full</p>
                    </div>
                    <a className="addClass2">+</a>
                </div>
            </div>
        );
    }
}

export default DashboardStudent;