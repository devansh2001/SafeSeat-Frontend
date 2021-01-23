import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div class="container">
<a href = "#"><img src ="logo.png" alt ="logo"/></a>
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
                        <Form.Control type="email" className="input" placeholder="School email" />
              
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className= "label">Password: *</Form.Label>
                        <Form.Control type="password" className="input" placeholder="Password" />
                    </Form.Group>

                    <Form.Label className = "label"><a href ="#"> Forgot Password? </a></Form.Label>
  
             

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="radio" className = "labelBox1" label="Student" />
                         <Form.Check type="radio" className = "labelBox1" label="Professor" />
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

export default Login;