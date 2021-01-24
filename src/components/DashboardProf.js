import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.png';
import { browserHistory } from 'react-router';

class DashboardProf extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.userInfo)
    }

    classSelected = () => {
        browserHistory.push('/covid');
    }

    getOptions = () => {
        
        const classes = this.props.userInfo.classes;
        let options = [];
        console.log(this.props.userInfo);
        console.log(classes);
        if (this.props.userInfo.classes === undefined) {
            return options;
        }
        for (let i = 0; i < this.props.userInfo.classes.length; i++) {
            options.push(<a onClick={ this.classSelected }> {this.props.userInfo.classes[i][0]} </a>)
        }
        return options;
    }

    addClass = () => {
        browserHistory.push('/create-class');
    }

    render() {
        return (
            <div class = "main" className="DashboardPage">
                <div className="sidenav">
                    <img src={logo} alt="Logo" className ="logo" />
                    <h2>Welcome, {this.props.userInfo.name}</h2>
                    <a href="#dashboard">Dashboard</a>
                    { this.getOptions() }
                    <a onClick={this.addClass} className="addClass">+</a>
                </div>
                <div class = "dashboard - ID">
                    <p className="profID">ID: 1234567890</p>
                </div>
                <div class = "dashboard - Log out">
                    <Button variant="" type="submit" className="logOutBtn">
                        LOG OUT
                    </Button>
                </div>
            </div>
        );
    }
}

export default DashboardProf;