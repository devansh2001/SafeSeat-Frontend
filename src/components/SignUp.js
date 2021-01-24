import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './style.css';
import '../index.js';
import './logo.png'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                email: '',
                password: '',
                confirmPassword: '',
                role: 'Student'
            }
        }
    }

    signUpClick = async () => {
        console.log(this.state.userInfo);
        const password = this.state.userInfo.password;
        const confirmPassword = this.state.userInfo.confirmPassword;
        if (password !== confirmPassword) {
            alert('Please ensure that passwords match!');
        }

        const URL = 'http://localhost:5000/user/add';
        let body = this.state.userInfo;
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }

        let apiResponse = null;
        await fetch(URL, options)
        .then(data => data.json())
        .then(data => apiResponse = data)
        .catch(err => console.log(err));

        console.log(apiResponse);
    }

    onNameChange = (e) => {
        const name = e.target.value;
        let userInfo = this.state.userInfo;
        userInfo['name'] = name;
        this.setState({
            userInfo: userInfo
        })
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        let userInfo = this.state.userInfo;
        userInfo['email'] = email;
        this.setState({
            userInfo: userInfo
        })
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        let userInfo = this.state.userInfo;
        userInfo['password'] = password;
        this.setState({
            userInfo: userInfo
        })
    }

    onConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        let userInfo = this.state.userInfo;
        userInfo['confirmPassword'] = confirmPassword;
        this.setState({
            userInfo: userInfo
        })
    }

    onRoleChange = (e) => {
        const role = e.currentTarget.value;
        let userInfo = this.state.userInfo;
        userInfo['role'] = role;
        this.setState({
            userInfo: userInfo
        })
    }




    render() {
        return (
            <div class="container">
            <a href = "#"><img src ="logo.png" alt ="logo"/></a>
            <h6><a href="../index.js">BACK</a></h6>


                <div class = "sign-up">
                    <h3>Sign Up with Safe Seat</h3>



                <hr  style={{
                    color: 'blue',
                    backgroundColor: '#000000',
                    height: .9,
                    borderColor : '#000000'
                }}/>


                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className= "label">Name: *</Form.Label>
                            <Form.Control onChange={this.onNameChange} type="text" className="input" placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className= "label">Email: *</Form.Label>
                            <Form.Control onChange={this.onEmailChange} type="email" className="input" placeholder="School email" />
                
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className= "label">Password: *</Form.Label>
                            <Form.Control onChange={this.onPasswordChange} type="password" className="input" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className= "label">Confirm Password: *</Form.Label>
                            <Form.Control type="password" onChange={this.onConfirmPasswordChange} className="input" placeholder="Confirm Password" />
    
                        </Form.Group>
                        <Form.Row>
                        <Form.Group className={'role-select'} controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label = "Request ADA Access" className = "labelBox" />
                        </Form.Group>
                        <div className='role-select'>
                            <Form.Row>
                                <p className='label'>Role</p>
                            </Form.Row>
                            <Form.Row>
                                
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Control as='select' onChange={this.onRoleChange}>
                                        <option>Student</option>
                                        <option>Professor</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </div>
                        </Form.Row>
                        
                        
                    </Form>
                    <Button variant="primary" onClick={this.signUpClick} className = "signup-btn">
                        Submit!
                    </Button>

                    
                </div>
             </div>


        );
    }
}

export default SignUp;