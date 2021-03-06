import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import logo from './whiteLogo.png';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div class="container"> <div className="sidenav1">
                    <img src={logo} alt="Logo" className ="logo1" />
                </div>
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
                        <Form.Control type="text" className="input" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className= "label">School Name: *</Form.Label>
                        <Form.Control type="text" className="input" placeholder="School Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className= "label">Email: *</Form.Label>
                        <Form.Control type="email" className="input" placeholder="School email" />
              
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className= "label">Password: *</Form.Label>
                        <Form.Control type="password" className="input" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className= "label">Confirm Password: *</Form.Label>
                        <Form.Control type="password" className="input" placeholder="Confirm Password" />
  
                    </Form.Group>
  
              
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="radio" className = "labelBox" label="Connect account with Covid Testing*" />
                    </Form.Group>
                    <Button variant="primary" className = "signup-btn" type="submit">
                        Submit!
                    </Button>
                </Form>

                 
             </div>
             </div>


        );
    }
}

export default SignUp;