import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import { browserHistory } from 'react-router';
import logo from './whiteLogo.png';

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
            this.props.updateUserInfo(apiResponse);
            console.log(apiResponse);
            if (apiResponse['role'] === 'Student') {
                browserHistory.push('/dashboard-student')
            } else {
                browserHistory.push('/dashboard-professor')
            }
        } else {
            alert('Incorrect credentials');
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
<div class="container">
 <div className="sidenav1">
                    <img src={logo} alt="Logo" className ="logo1" />
                </div>
<h6><a href="../index.js">BACK</a></h6>


            <div class = "sign-up">
                <h3>Sign In with Safe Seat</h3>



            <hr  style={{
                color: 'blue',
                backgroundColor: '#000000',
                height: .9,
                borderColor : '#000000'
            }}/>


                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className= "label">Email: *</Form.Label>
                        <Form.Control onChange={this.onEmailChange} type="email" className="input" placeholder="School email" />
              
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className= "label">Password: *</Form.Label>
                        <Form.Control  onChange={this.onPasswordChange} type="password" className="input" placeholder="Password" />
                    </Form.Group>
                    
                </Form>
                <Button variant="primary"  onClick={this.signInClick}  className = "signup-btn" type="submit">
                    Submit!
                </Button>
             </div>
             </div>


        );
    }
}

export default Login;