import React, { Component } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

import { browserHistory } from 'react-router';

import logo from './logo.png';


class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseID: '',
            building: '',
            room: '',
            rows: 0,
            columns: 0
        }
    }

    addClass = async () => {
        const building = this.state.building;
        const room = this.state.room;
        const courseID = this.state.courseID;
        
        if (!(building && room)) {
            return;
        }

        // make API call to get rows and cols
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const URL = 'http://localhost:5000/rooms/add-class';
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Headers", "*");
        let body = {
            courseID: courseID,
            roomID: building + '-' + room,
            timing: '08:00:00'
        }
        let options = {
            method: 'POST',
            headers: headers,
            redirect: 'follow',
            body: JSON.stringify(body)
        }

        let apiResponse = null;
        await fetch(URL, options)
        .then(data => data.json())
        .then(data => apiResponse = data)
        .catch(err => console.log(err));

        console.log(apiResponse);
        alert('Class added at ' + building + ' ' + room + '!');
        browserHistory.push('/dashboard-professor');
    }

    updateRowsCols = async () => {
        const building = this.state.building;
        const room = this.state.room;
        console.log(building, room);
        if (!(building && room)) {
            return;
        }

        // make API call to get rows and cols
        const URL = 'http://localhost:5000/rooms/dimension/' + building + '-' + room;
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Headers", "*");
        let options = {
            method: 'GET',
            headers: headers
        }

        let apiResponse = null;
        await fetch(URL, options)
        .then(data => data.json())
        .then(data => apiResponse = data)
        .catch(err => console.log(err));

        console.log(apiResponse);
        if (apiResponse === null) {
            return;
        }

        const length = apiResponse['length'];
        const breadth = apiResponse['breadth'];

        this.setState({
            length: length,
            breadth: breadth
        });
    }

    onCourseIDChange = (e) => {
        const courseID = e.target.value;
        this.setState({
            courseID: courseID
        });
    }

    onBuildingChange = async (e) => {
        const building = e.currentTarget.value;
        await this.setState({
            building: building
        });
        await this.updateRowsCols();
    }

    onRoomChange = async (e) => {
        const room = e.currentTarget.value;
        await this.setState({
            room: room
        });
        await this.updateRowsCols();
    }

    onRowsChange = (e) => {
        const rows = e.target.value;
        this.setState({
            rows: rows
        });
    }

    onColsChange = (e) => {
        const cols = e.target.value;
        this.setState({
            cols: cols
        });
    }

    render() {
        return (
            <div class="create-class">
            <Container>
            <div className="sidenav">
                    <img src={logo} alt="Logo" className ="logo" />
                    <h2>John Doe</h2>
                    <a href="#dashboard">Dashboard</a>
                    <a href="#class1">CS 1101 - A</a>
                    <a href="#class2">CS 1101 - B</a>
                    <a href="#class3">CS 1102 - A</a>
                    <a className="addClass">+</a>
                </div>
                

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="label1">Course ID: *</Form.Label>
                        <Form.Control onChange={this.onCourseIDChange} type="text" placeholder="Course ID (ex. CS 101)" />
                    </Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className="label1">Select Building: *</Form.Label>
                                <Form.Control onChange={this.onBuildingChange} as="select">
                                    <option>Clough Undergraduate Learning Commons</option>
                                    <option>College of Computing</option>
                                    <option>Instructional Center</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className="label1">Select Room: *</Form.Label>
                                <Form.Control onChange={this.onRoomChange} as="select">
                                    <option>101</option>
                                    <option>220</option>
                                    <option>305</option>
                                    <option>332</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="label1">Number of Rows: *</Form.Label>
                                <Form.Control onChange={this.onRowsChange} value={this.state.length} type="text" placeholder="10" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="label1">Number of Seats: *</Form.Label>
                                <Form.Control onChange={this.onColsChange} value={this.state.breadth} type="text" placeholder="20" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>
                <Button onClick={this.addClass} className="signup-btn">
                    Add Class
                </Button>
            </Container>
            </div>
        )
    }
}

export default CreateClass;