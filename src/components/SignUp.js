import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class = "sign-up">
                <h1>Sign Up</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="School email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Passwork</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up!
                    </Button>
                </Form>

                <p>Already have an account? <Button variant='secondary'> Sign In</Button></p>
            </div>
        );
    }
}

export default SignUp;