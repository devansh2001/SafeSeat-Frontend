import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                email: '',
                password: '',
                confirmPassword: '',
                role: ''
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
        const role = e.target.value;
        let userInfo = this.state.userInfo;
        userInfo['role'] = role;
        this.setState({
            userInfo: userInfo
        })
    }

    render() {
        return (
            <div class = "sign-up">
                <h1>Sign Up</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.onNameChange} type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.onEmailChange} type="email" placeholder="School email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onPasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Passwork</Form.Label>
                        <Form.Control onChange={this.onConfirmPasswordChange} type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button onClick={this.signUpClick} variant="primary" type="submit">
                        Sign Up!
                    </Button>
                </Form>

                <p>Already have an account? <Button variant='secondary'> Sign In</Button></p>
            </div>
        );
    }
}

export default SignUp;