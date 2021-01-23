import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                email: '',
                password: ''
            }
        }
    }

    signInClick = async () => {
        const email = this.state.userInfo.email;
        const password = this.state.userInfo.password;
        console.log(this.state);
        const URL = 'http://localhost:5000/user/retrieve/' + email;
        console.log(URL);
        let body = this.state.userInfo;
        let headers = new Headers();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "*");
        headers.append("Content-Type", "application/json");
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

        if (apiResponse['password'] === password) {
            alert('Success');
        } else {
            alert('Failure');
        }
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

    render() {
        return (
            <div class = "sign-in">
                <h1> Sign in</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.onEmailChange} type="email" placeholder="School email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onPasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    
                </Form>
                    <Button onClick={this.signInClick} variant="primary">
                        Submit
                    </Button>

                    <p>Don't have an account? <Button variant='secondary'> Sign up</Button></p>

            </div>
        );
    }
}

export default Login;