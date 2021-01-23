import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class = "sign-in">
                <h1> Sign in</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="School email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                    <p>Don't have an account? <Button variant='secondary'> Sign up</Button></p>

            </div>
        );
    }
}

export default Login;