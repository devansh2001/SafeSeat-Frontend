import React, { Component } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import logo from './logo.png';
import { browserHistory } from 'react-router';

class DashboardStudent extends Component {
    constructor(props) {
        super(props);
    }

    classSelected = () => {
        browserHistory.push('/covid');
    }

    getClassInfo = () => {
        let classes = this.props.userInfo.classes;
        let classInfo = [];
        let times = ["9:00 AM - 9:50 AM", "10 AM - 10:50 AM", "12:30 PM - 1:20 PM", "2:00 PM - 2:50 PM", "3:00 PM - 3:50 PM"]
        
        for (let i = 0; i < classes.length; i++) {
            classInfo.push(
                <Card onClick = { this.classSelected } style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{ classes[i][0] }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ times[i] }</Card.Subtitle>
                        <Button>Select Seats</Button>
                    </Card.Body>
                </Card>
            )
        }
        return classInfo;
    }

    getOptions = () => {
        const classes = this.props.userInfo.classes;
        let options = [];
        for (let i = 0; i < classes.length; i++) {
            options.push(<a onClick={ this.classSelected }> {classes[i][0]} </a>)
        }
        return options;
    }

    render() {
        return (
            <Container>
                <div class = "main" className="DashboardPage">
                    <Row>
                        <Col>
                            <div className="sidenav">
                                <img src={logo} alt="Logo" className ="logo" />
                                <h2>John Doe</h2>
                                <a href="#dashboard">Dashboard</a>
                                { this.getOptions() }
                                <a className="addClass">+</a>
                            </div>
                        </Col>
                        <Col>
                            <div className = "dashboard">
                                { this.getClassInfo() }
                            </div>
                        </Col>
                    </Row>s
                </div>
            </Container>
        );
    }
}

export default DashboardStudent;